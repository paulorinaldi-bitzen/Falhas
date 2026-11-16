import { Controller, Post, Get, Patch, Param, Body, Query, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserChangeLogsService } from './user-change-logs.service';
import { SearchUserDto } from './dto/search-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly userChangeLogsService: UserChangeLogsService,
  ) {}

  @Get('change-logs')
  async getChangeLogs(@Query('period') period: string = '7d') {
    try {
      this.logger.log(`GET /users/change-logs?period=${period} - Fetching change logs`);
      const logs = await this.userChangeLogsService.getChangeLogsByPeriod(period);
      
      // Calculate metrics
      const totalChanges = logs.length;
      const uniqueUsersEdited = new Set(logs.map(log => log.userId)).size;
      const changesByDay = new Map<string, number>();
      
      logs.forEach(log => {
        const date = new Date(log.changedAt).toISOString().split('T')[0];
        changesByDay.set(date, (changesByDay.get(date) || 0) + 1);
      });

      const avgChangesPerDay = changesByDay.size > 0 
        ? (totalChanges / changesByDay.size).toFixed(1) 
        : '0';

      this.logger.log(`GET /users/change-logs - Logs fetched successfully`);
      return {
        logs,
        metrics: {
          totalChanges,
          uniqueUsersEdited,
          avgChangesPerDay,
          changesByDay: Object.fromEntries(changesByDay),
        },
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      this.logger.error(`GET /users/change-logs - Error:`, error.stack);
      throw new HttpException(
        'Erro interno ao buscar logs de alterações',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    try {
      this.logger.log(`GET /users/${id} - Fetching user by ID`);
      const result = await this.usersService.getUserById(id);
      this.logger.log(`GET /users/${id} - User fetched successfully`);
      return result;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      this.logger.error(`GET /users/${id} - Error:`, error.stack);
      throw new HttpException(
        'Erro interno ao buscar usuário',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('search')
  async searchUsers(@Body() dto: SearchUserDto) {
    try {
      return await this.usersService.searchUsers(dto);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      console.error('Erro ao buscar usuários:', error);
      throw new HttpException(
        'Erro interno ao buscar usuários',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    try {
      this.logger.log(`PATCH /users/${id} - Updating user`);
      const result = await this.usersService.updateUser(id, dto);
      this.logger.log(`PATCH /users/${id} - User updated successfully`);
      return result;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      this.logger.error(`PATCH /users/${id} - Error:`, error.stack);
      throw new HttpException(
        'Erro interno ao atualizar usuário',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
