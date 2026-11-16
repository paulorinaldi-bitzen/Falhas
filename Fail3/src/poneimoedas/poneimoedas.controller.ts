import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { PoneimoedasService } from './poneimoedas.service';

@Controller('poneimoedas')
export class PoneimoedasController {
  constructor(private poneimoedasService: PoneimoedasService) {}

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.poneimoedasService.findByUserId(userId);
  }

  @Get('user/:userId/quantidade')
  async getQuantidade(@Param('userId') userId: string) {
    const quantidade = await this.poneimoedasService.getPoneimoedas(userId);
    return { quantidade };
  }

  @Get('user/:userId/episodios')
  async getEpisodios(@Param('userId') userId: string) {
    return this.poneimoedasService.getEpisodiosReproduzidos(userId);
  }

  @Post('user/:userId/episodios')
  async addEpisodio(
    @Param('userId') userId: string,
    @Body('episodioId') episodioId: string,
    @Body('titulo') titulo: string,
    @Body('quantidade') quantidade: number,
  ) {
    return this.poneimoedasService.addEpisodio(userId, episodioId, titulo, quantidade);
  }

  @Put('user/:userId/initialize')
  async initialize(@Param('userId') userId: string) {
    return this.poneimoedasService.initializePoneiMoedas(userId);
  }
}
