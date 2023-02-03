import { Module } from '@nestjs/common';
import { OrderTrendController } from './controllers/OrderTrend.controller';
import { PrismaService } from './providers/prisma.service';
import { OrderTrendService } from './providers/orderTrend.service';
import { companyController } from './controllers/Company.controller';
import { companyService } from './providers/company.service';

@Module({
  imports: [],
  controllers: [OrderTrendController,companyController],
  providers: [OrderTrendService,PrismaService,companyService],
})
export class AppModule {}
