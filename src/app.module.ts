import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from './database/database.module';
import {HistoryModule} from './history/history.module';
import {ConfigModule} from "@nestjs/config";
import configuration from "./config/configuration";

@Module({
    imports: [ConfigModule.forRoot({
        load: [configuration],
    }), DatabaseModule, HistoryModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
