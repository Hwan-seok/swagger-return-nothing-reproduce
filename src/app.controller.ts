import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TestBodyDto } from './dto/test-body.dto';
import { TestQueryDto } from './dto/test-query.dto';
import { TestResponseDto } from './dto/test-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(@Query() query: TestQueryDto): Promise<TestResponseDto> {
    return Promise.resolve({ propertyOne: 1, propertyTwo: '2' });
  }
  @Post()
  post(@Body() testBodyDto: TestBodyDto): string {
    return 'test';
  }
  @Put()
  put(@Body() testBodyDto: TestBodyDto): number {
    return 1;
  }

  @Delete(':param')
  delete(@Param('param') param: string): Promise<number> {
    return Promise.resolve(1);
  }
}
