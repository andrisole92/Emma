import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    DataType
} from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";

@Table
export class BaseEntity<T = any, T2 = any> extends Model<T, T2> {


    @ApiProperty()
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;


    @ApiProperty()
    @CreatedAt
    @Column
    createdAt: Date;


    @ApiProperty()
    @UpdatedAt
    @Column
    updatedAt: Date;
}
