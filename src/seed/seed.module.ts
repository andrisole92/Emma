import {Module} from '@nestjs/common';
import {SeedService} from './seed.service';
import {DatabaseModule} from "../database/database.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
import configuration from "../config/configuration";

@Module({
    imports: [ConfigModule.forRoot({
        load: [configuration],
    }), DatabaseModule],
    providers: [SeedService, ConfigService]
})
export class SeedModule {
}
