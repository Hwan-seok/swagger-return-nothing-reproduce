import { ApiProperty } from '@nestjs/swagger';

export class TestQueryDto {
  @ApiProperty()
  queryOne: number;

  @ApiProperty()
  queryTwo: string;
}
