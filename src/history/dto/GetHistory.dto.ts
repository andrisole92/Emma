import {IsDate, IsNotEmpty} from 'class-validator';
import {Type} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";


export class GetHistoryDTO {


    @ApiProperty({example: 32})
    @IsNotEmpty()
    userId: number;


    @ApiModelProperty({type: 'string', format: 'date-time', example: '2019-11-21'})
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    from: Date;


    @ApiModelProperty({type: 'string', format: 'date-time', example: '2021-11-21'})
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    to: Date;
}
