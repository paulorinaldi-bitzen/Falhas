import { Module } from '@nestjs/common';
import { PoneimoedasService } from './poneimoedas.service';
import { PoneimoedasController } from './poneimoedas.controller';

@Module({
  controllers: [PoneimoedasController],
  providers: [PoneimoedasService],
  exports: [PoneimoedasService],
})
export class PoneimoedasModule {}
