
import { Body, Controller, Get, Param } from '@nestjs/common';
import {OrderTrendService} from '../providers/orderTrend.service'

@Controller('OrderTrends')
export class OrderTrendController {
  constructor(private readonly orderTrendService : OrderTrendService){}
    /**
   * Fetches OrderData from OrderService upto given number of days 
   * @param params params consists days which is an numberic type
   * @returns Json Array of OrderData DTO
   */
  @Get('/days/:days')
  async getSpecificDaysOrdersData(@Param() params) {
    return this.orderTrendService.getLastXDays(params.days);
  }





}