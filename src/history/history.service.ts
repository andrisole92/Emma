import {Injectable} from '@nestjs/common';
import {GetHistoryDTO} from "./dto/GetHistory.dto";
import {TransactionEntity} from "../model/Transaction.entity";
import {QueryTypes} from "sequelize";
import {PERCENTILE_QUERY} from "../queries";
import {IMerchantPercentile} from "./dto/SpendingsResponse.dto";


@Injectable()
export class HistoryService {

    async getTransactionsInRange(query: GetHistoryDTO): Promise<IMerchantPercentile[]> {
        const {from, to, userId} = query;
        return TransactionEntity.sequelize.query(PERCENTILE_QUERY, {
            replacements: {userId, from, to},
            type: QueryTypes.SELECT
        });
    }

}
