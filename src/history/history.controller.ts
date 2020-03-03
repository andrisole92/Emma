import {Controller, Get, Query} from '@nestjs/common';
import {GetHistoryDTO} from "./dto/GetHistory.dto";
import {HistoryService} from "./history.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {TransactionEntity} from "../model/Transaction.entity";
import {SeedService} from "../seed/seed.service";
import {IMerchantPercentile} from "./dto/HistoryResponse.dto";


@ApiTags('List')
@Controller('history')
export class HistoryController {

    constructor(private readonly historyService: HistoryService) {

    }


    @ApiResponse({
        description: 'Transaction array.',
        type: [IMerchantPercentile],
        status: 200
    })
    @Get()
    async findAll(@Query() query: GetHistoryDTO): Promise<IMerchantPercentile[]> {
        try {
            return await this.historyService.getTransactionsInRange(query);
        } catch (e) {
            console.log(e);
            return [];
        } finally {

        }

    }
}
