

export class BaseProductDto {
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(IsStringValidationOptions())
    readonly title:string;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(IsStringValidationOptions())
    @IsPositive(IsPositiveValidationOptions())
    readonly price:number;
    
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(IsStringValidationOptions())
    readonly description:string;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @ArrayNotEmpty(ArrayNotEmptyValidationOptions())
    readonly images:string;

    
}