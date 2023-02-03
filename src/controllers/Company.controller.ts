import { Body, Controller, Get } from "@nestjs/common"
import { result } from "src/dtos/CompanyDataDTO"
import { companyService } from "src/providers/company.service";


@Controller('Company') 
export class companyController{
  constructor(private readonly companyService : companyService){}
 @Get('/CompanyData/')
  async getSpecificCompanyData(@Body() body: any): Promise<result[]>{
    return this.companyService.getSpecificCompanydata(body.CompanyName,body.Dates)
  }
  @Get('/companies/')
  async getAllCompanies(){
    return this.companyService.getCompaniesList();
  } 
}