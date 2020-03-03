import {ApiProperty} from "@nestjs/swagger";

export class IMerchantPercentile {
    @ApiProperty()
    userId: number;
    @ApiProperty()
    merchantId: number;
    @ApiProperty()
    merchant_name: string;
    @ApiProperty()
    merchant_logo: string;
    @ApiProperty()
    merchant_gif: string;
    @ApiProperty()
    total_spent: string;
    @ApiProperty()
    percent_rank: number;
}

export class SpendingsResponseDTO {
    @ApiProperty()
    merchants: IMerchantPercentile[];
}
