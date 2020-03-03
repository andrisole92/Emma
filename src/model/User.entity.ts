import {Table, Column, Model, HasMany, Length} from 'sequelize-typescript';
import {BaseEntity} from "./base.entity";
import {TransactionEntity} from "./Transaction.entity";
import {ApiProperty} from "@nestjs/swagger";

@Table
export class UserEntity extends BaseEntity<UserEntity> {

    @ApiProperty()
    @Length({min: 3, max: 25})
    @Column({
        allowNull: false
    })
    firstName: string;

    @ApiProperty()
    @Length({min: 3, max: 25})
    @Column({
        allowNull: false
    })
    lastName: string;

    @HasMany(() => TransactionEntity)
    transactions: TransactionEntity[];

}
