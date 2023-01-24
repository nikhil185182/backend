
import { Controller, Get, Param } from '@nestjs/common';
import { OrderData } from 'src/dtos/orderTrenddto';
import {OrderTrendService} from '../providers/orderTrend.service'

@Controller('OrderTrends')
export class OrderTrendController {
  constructor(private readonly orderTrendService : OrderTrendService){}

  @Get('/days/:days')
  async getSpecificDaysOrdersData(@Param() params) {
    return this.orderTrendService.getLastXDays(params.days);
  }
}