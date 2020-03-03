import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import {SeedService} from "../seed/seed.service";

@Module({
  controllers: [HistoryController],
  providers: [HistoryService, SeedService]
})
export class HistoryModule {}
