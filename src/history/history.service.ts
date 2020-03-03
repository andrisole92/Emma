import {Injectable} from '@nestjs/common';
import {GetHistoryDTO} from "./dto/GetHistory.dto";
import {TransactionEntity} from "../model/Transaction.entity";
import {Op} from "sequelize";
import {MerchantEntity} from "../model/Merchant.entity";
import {UserEntity} from "../model/User.entity";

@Injectable()
export class HistoryService {

    async getTransactionsInRange(query: GetHistoryDTO) {
        return TransactionEntity.findAll({
            where: {
                createdAt: {
                    [Op.and]: {
                        [Op.gte]: query.from,
                        [Op.lte]: query.to,
                    }
                },
                userId: {
                    [Op.eq]: query.userId
                }
            },
            include: [MerchantEntity]
        });
    }

}
