import {Controller, Get, Query} from '@nestjs/common';
import {GetHistoryDTO} from "./dto/GetHistory.dto";
import {HistoryService} from "./history.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {IMerchantPercentile, SpendingsResponseDTO} from "./dto/SpendingsResponse.dto";


@ApiTags('List')
@Controller('history')
export class HistoryController {

    constructor(private readonly historyService: HistoryService) {

    }


    @ApiResponse({
        description: 'Transaction array.',
        type: SpendingsResponseDTO,
        status: 200
    })
    @Get()
    async findAll(@Query() query: GetHistoryDTO): Promise<SpendingsResponseDTO> {
        try {
            const merchants: IMerchantPercentile[] = await this.historyService.getTransactionsInRange(query);
            return {merchants}
        } catch (e) {
            console.log(e);
            return {merchants: []};
        } finally {

        }

    }
}
