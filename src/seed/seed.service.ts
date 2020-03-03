import {Injectable} from '@nestjs/common';
import * as faker from 'faker';
import {UserEntity} from "../model/User.entity";
import {MerchantEntity} from "../model/Merchant.entity";
import {TransactionEntity} from "../model/Transaction.entity";

const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)]
};

@Injectable()
export class SeedService {
    async seed() {
        const users = [];
        const merchants = [];
        const transactions = [];
        for (const ignored of new Array(10)) {
            try {
                users.push(await UserEntity.create({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName()
                }))
            } catch (e) {
                console.error(e);
            }
        }
        for (const ignored of new Array(10)) {
            try {
                merchants.push(await MerchantEntity.create({['display_name']: faker.company.companyName()}))
            } catch (e) {
                console.error(e);
            }
        }
        // console.log(getRandom(users).id);
        // console.log(merchants.map(m => m.id));
        //
        for (const ignored of new Array(1000)) {
            const userId = getRandom(users).id;
            const merchantId = getRandom(merchants).id;
            try {
                transactions.push(await TransactionEntity.create({
                    amount: faker.random.number({min: 10, max: 10000}),
                    description: faker.commerce.product(),
                    userId,
                    merchantId
                }))
            } catch (e) {
                console.error(e);
            }
        }
    }
}
