import { ApiProperty } from '@nestjs/swagger';

export class TestBodyDto {
  @ApiProperty()
  bodyOne: number;
}
