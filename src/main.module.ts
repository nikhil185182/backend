import { Module } from '@nestjs/common';
import { OrderTrendController } from './controllers/OrderTrend.controller';
import { PrismaService } from './providers/prisma.service';
import { OrderTrendService } from './providers/orderTrend.service';
import { companyController } from './controllers/Company.controller';
import { companyService } from './providers/company.service';
import { companyRepo } from './util/CompanyRepo';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { graphqlResolver } from './resolver/company.resolver';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema:true
    }),
  ],
  controllers: [OrderTrendController,companyController],
  providers: [OrderTrendService,PrismaService,companyService,companyRepo,graphqlResolver,PrismaClient],
})
export class AppModule {}


