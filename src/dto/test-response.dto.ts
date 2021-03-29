import { ApiProperty } from '@nestjs/swagger';

export class TestResponseDto {
  @ApiProperty()
  propertyOne: number;

  @ApiProperty()
  propertyTwo: string;
}
