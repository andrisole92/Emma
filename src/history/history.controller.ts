import {Controller, Get, Query} from '@nestjs/common';
import {GetHistoryDTO} from "./dto/GetHistory.dto";
import {HistoryService} from "./history.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {TransactionEntity} from "../model/Transaction.entity";


@ApiTags('List')
@Controller('history')
export class HistoryController {

    constructor(private readonly historyService: HistoryService) {
    }


    @ApiResponse({
        description: 'Transaction array.',
        type: [TransactionEntity],
        status: 200
    })
    @Get()
    async findAll(@Query() query: GetHistoryDTO): Promise<TransactionEntity[]> {
        try {
            return await this.historyService.getTransactionsInRange(query);
        } catch (e) {
            console.log(e);
            return [];
        } finally {

        }

    }
}
