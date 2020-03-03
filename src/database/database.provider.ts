import {Sequelize} from 'sequelize-typescript';
import {UserEntity} from "../model/User.entity";
import {MerchantEntity} from "../model/Merchant.entity";
import {TransactionEntity} from "../model/Transaction.entity";
import {ConfigModule, ConfigService} from "@nestjs/config";


export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => {
            console.log('here', configService);
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: configService.get('database.host'),
                port: configService.get('database.port'),
                username: configService.get('database.username'),
                password: configService.get('database.password'),
                database: configService.get('database.db'),
            });
            sequelize.addModels([UserEntity, MerchantEntity, TransactionEntity]);
            await sequelize.sync();
            return sequelize;
        },
        inject: [ConfigService]


    },
];
