import {Test, TestingModule} from '@nestjs/testing';
import {HistoryService} from './history.service';
import {MerchantEntity} from "../model/Merchant.entity";
import {UserEntity} from "../model/User.entity";
import {TransactionEntity} from "../model/Transaction.entity";
import {DatabaseModule} from "../database/database.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
import configuration from "../config/configuration";
import {IMerchantPercentile} from "./dto/SpendingsResponse.dto";

describe('HistoryService', () => {
    let service: HistoryService;

    let sampleMerchant1: MerchantEntity;
    let sampleMerchant2: MerchantEntity;
    let sampleUser1: UserEntity;
    let sampleUser2: UserEntity;
    let sampleTransactions: TransactionEntity[] = [];

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [ConfigModule.forRoot({
                load: [configuration],
            }), DatabaseModule],
            providers: [HistoryService, ConfigService],
        }).compile();

        service = module.get<HistoryService>(HistoryService);


        // wipes all tables
        await TransactionEntity.destroy({truncate: true});
        await UserEntity.destroy({cascade: true, truncate: true});
        await MerchantEntity.destroy({cascade: true, truncate: true});


        sampleMerchant1 = await MerchantEntity.create({['display_name']: 'Merchant 1'});
        sampleMerchant2 = await MerchantEntity.create({['display_name']: 'Merchant 2'});
        sampleUser1 = await UserEntity.create({firstName: 'User 1', lastName: 'LastName'});
        sampleUser2 = await UserEntity.create({firstName: 'User 2', lastName: 'LastName'});
        sampleTransactions = await TransactionEntity.bulkCreate([
            {
                userId: sampleUser1.id,
                merchantId: sampleMerchant1.id,
                amount: 3000,
                description: 'Sample Transaction'
            },
            {
                userId: sampleUser1.id,
                merchantId: sampleMerchant2.id,
                amount: 3000,
                description: 'Sample Transaction'
            }, {
                userId: sampleUser1.id,
                merchantId: sampleMerchant2.id,
                amount: 3000,
                description: 'Sample Transaction'
            }, {
                userId: sampleUser2.id,
                merchantId: sampleMerchant1.id,
                amount: 3000,
                description: 'Sample Transaction'
            }, {
                userId: sampleUser2.id,
                merchantId: sampleMerchant1.id,
                amount: 3000,
                description: 'Sample Transaction'
            }, {
                userId: sampleUser2.id,
                merchantId: sampleMerchant2.id,
                amount: 3000,
                description: 'Sample Transaction'
            }]);

    });

    afterAll(async () => {
        // await sampleUser1.destroy();
        // await sampleMerchant1.destroy();

    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should fetch all transactions for user give id, from date and to date', async () => {
        expect(service).toBeDefined();
        const percentiles: IMerchantPercentile[] = await service.getTransactionsInRange({
            userId: sampleUser2.id,
            from: new Date('12-20-2019'),
            to: new Date('11-20-2020-18:56')
        });
        console.log(percentiles);
        expect(percentiles.length).toBe(2);
    });
});
