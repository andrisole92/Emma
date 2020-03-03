import {Table, Column, HasMany, Length} from 'sequelize-typescript';
import {BaseEntity} from "./base.entity";
import {TransactionEntity} from "./Transaction.entity";
import {ApiProperty} from "@nestjs/swagger";

@Table
export class MerchantEntity extends BaseEntity<MerchantEntity> {



    @ApiProperty()
    @Length({min: 3, max: 40})
    @Column({
        allowNull: false
    })
    display_name: string;

    @ApiProperty()
    @Length({min: 3, max: 1000})
    @Column
    icon_url: number;

    @ApiProperty()
    @Length({min: 3, max: 1000})
    @Column
    funny_gif_url: string;

    @HasMany(() => TransactionEntity)
    transactions: TransactionEntity[];
}
