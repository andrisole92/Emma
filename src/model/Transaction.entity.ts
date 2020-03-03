import {Table, Column, Model, ForeignKey, BelongsTo, Length} from 'sequelize-typescript';
import {BaseEntity} from "./base.entity";
import {UserEntity} from "./User.entity";
import {MerchantEntity} from "./Merchant.entity";
import {ApiProperty} from "@nestjs/swagger";


@Table
export class TransactionEntity extends BaseEntity<TransactionEntity> {
    // date is in the base entity

    @ApiProperty()
    @Column({
        allowNull: false,
    })
    amount: number;

    @ApiProperty()
    @Length({min: 3, max: 500})
    @Column({
        allowNull: false
    })
    description: string;

    @ApiProperty()
    @ForeignKey(() => UserEntity)
    @Column({
        allowNull: false,
    })
    userId: number;

    @BelongsTo(() => UserEntity)
    user: UserEntity;


    @ApiProperty({
        type: Number,
        name: 'merchantId'
    })
    @ForeignKey(() => MerchantEntity)
    @Column({
        allowNull: false,
    })
    merchantId: number;


    @ApiProperty({type: MerchantEntity})
    @BelongsTo(() => MerchantEntity)
    merchant: MerchantEntity;

}
