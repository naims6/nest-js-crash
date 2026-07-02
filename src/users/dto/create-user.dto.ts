import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  // name
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(2)
  name: string;

  // email
  @IsEmail(
    {},
    {
      message: 'Please enter a valid email address.',
    },
  )
  email: string;
}
