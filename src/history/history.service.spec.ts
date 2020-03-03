import {Test, TestingModule} from '@nestjs/testing';
import {HistoryService} from './history.service';
import {MerchantEntity} from "../model/Merchant.entity";
import {UserEntity} from "../model/User.entity";
import {TransactionEntity} from "../model/Transaction.entity";
import {DatabaseModule} from "../database/database.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
import configuration from "../config/configuration";

describe('HistoryService', () => {
    let service: HistoryService;

    let sampleMerchant: MerchantEntity;
    let sampleUser: UserEntity;
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


        sampleMerchant = await MerchantEntity.create({['display_name']: 'Merchant 1'});
        sampleUser = await UserEntity.create({firstName: 'User 1', lastName: 'LastName'});
        sampleTransactions = await TransactionEntity.bulkCreate([
            {
                createdAt: new Date('12-20-2010'),
                userId: sampleUser.id,
                merchantId: sampleMerchant.id,
                amount: 3000,
                description: 'Sample Transaction'
            },
            {
                userId: sampleUser.id,
                merchantId: sampleMerchant.id,
                amount: 3000,
                description: 'Sample Transaction'
            }, {
                userId: sampleUser.id,
                merchantId: sampleMerchant.id,
                amount: 3000,
                description: 'Sample Transaction'
            }, {
                userId: sampleUser.id,
                merchantId: sampleMerchant.id,
                amount: 3000,
                description: 'Sample Transaction'
            }, {
                userId: sampleUser.id,
                merchantId: sampleMerchant.id,
                amount: 3000,
                description: 'Sample Transaction'
            }, {
                userId: sampleUser.id,
                merchantId: sampleMerchant.id,
                amount: 3000,
                description: 'Sample Transaction'
            }]);

    });

    afterAll(async () => {
        // await sampleUser.destroy();
        // await sampleMerchant.destroy();

    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should fetch all transactions for user give id, from date and to date', async () => {
        expect(service).toBeDefined();
        const transactions = await service.getTransactionsInRange({
            userId: sampleUser.id,
            from: new Date('12-20-2019'),
            to: new Date('11-20-2020-18:56')
        });
        console.log(transactions.length);
        console.log(sampleTransactions.length);
        expect(transactions.length).toBe(5);
    });
});
