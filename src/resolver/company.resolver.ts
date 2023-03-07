import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { companyLevel } from 'src/dtos/CompanyDataDTO';
import { OrderData } from 'src/dtos/orderTrenddto';
import { OrderTrendService } from 'src/providers/orderTrend.service';
import { companyService } from 'src/providers/company.service';
import { companiesList } from 'src/dtos/CompanyDataDTO';

@Resolver('Ordertrend')
export class graphqlResolver {
  constructor(
    private readonly ordertrendService: OrderTrendService,
    private readonly companyService: companyService,
  ) {}
  @Query(() => [OrderData], { name: 'ordertrend' }) getLastData(
    @Args('days', { type: () => Int }) days: number,
  ) {
    return this.ordertrendService.getLastXDays(days);
  }
  @Query(() => [companyLevel], { name: 'getSpecificCompanyData' }) getData(
    @Args('cname', { type: () => String}) cname: string,
    @Args('cdates', { type: () => String }) cdates: string,
  ) {
    return this.companyService.getSpecificCompanydata(cname, cdates);
  }

  @Query(() => [companiesList], { name: 'companyLists' }) getCompanies()
 {
    return this.companyService.getCompaniesList();
  }
}
