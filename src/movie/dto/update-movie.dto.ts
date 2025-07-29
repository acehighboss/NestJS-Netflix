import { Equals, IsEnum, IsDefined, IsIn, IsEmpty, IsNotEmpty, IsOptional, ValidatorConstraintInterface, ValidationArguments, ValidatorConstraint, ValidationOptions, registerDecorator, IsString, IsNumber, ArrayNotEmpty, IsArray } from "class-validator";

enum MovieGenre{
    Fantasy = 'fantasy',
    Action = 'action'
}

export class UpdateMovieDto{
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    title?: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsNumber({}, {
        each: true,
    })
    @IsOptional()
    genreIds?: number[];

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    detail?: string;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    directorId?: number;
    // null || undefined
    // @IsDefined()
    // @IsOptional()
    // @Equals('')
    // null || undefined || ''
    // @IsEmpty() 
    // @IsIn(['action', 'fantasy'])
    // @IsEnum(MovieGenre)
    // "2024-07-07T12:00:00.000Z"
    // @IsDateString()
    // @IsDivisibleBy()
    // @Min(), @Max()
    // @Contains(''), @NotContains('')
    // @IsAlphanumeric() - 알파벳과 숫자만 됨, 빈칸 있으면 안됨(비밀번호)
    // @IsHexColor() - 16진수 6자리
    // @MinLength(), @MaxLength()
    // @IsUUID()
    // @IsLatLong() - 위도, 경도
    // @Validate(PasswordValidator, {
    //     message: "다른 에러 메세지",
    // })
    // @IsPasswordValid()
}