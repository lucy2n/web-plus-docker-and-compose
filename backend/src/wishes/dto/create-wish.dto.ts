import { IsUrl, Length, IsOptional, Min } from 'class-validator';
export class CreateWishDto {
  @Length(1, 250)
  name: string;

  @IsUrl()
  link: string;

  @IsUrl()
  image: string;

  @Min(1)
  price: number;

  @Length(1, 1024)
  description: string;

  @IsOptional()
  raised: number;

  @IsOptional()
  copied: number;
}
