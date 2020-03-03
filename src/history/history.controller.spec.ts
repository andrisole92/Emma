import {Test, TestingModule} from '@nestjs/testing';
import {HistoryController} from './history.controller';
import {HistoryService} from "./history.service";
import {TransactionEntity} from "../model/Transaction.entity";
import {SpendingsResponseDTO} from "./dto/SpendingsResponse.dto";

describe('History Controller', () => {
    let controller: HistoryController;
    let historyService: HistoryService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [HistoryController],
            providers: [HistoryService]
        }).compile();

        controller = module.get<HistoryController>(HistoryController);
        historyService = module.get<HistoryService>(HistoryService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of transactions', async () => {
            const result: SpendingsResponseDTO = {merchants: []};
            jest.spyOn(historyService, 'getTransactionsInRange').mockReturnValue(
                Promise.resolve([])
            );

            expect(await controller.findAll({
                userId: 1,
                from: new Date('12-20-2019'),
                to: new Date('12-20-2020')
            })).toStrictEqual(result);
        });
    });
});
