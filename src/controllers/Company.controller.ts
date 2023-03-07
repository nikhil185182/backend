import { Body, Controller, Get } from "@nestjs/common"
import { PrismaClient } from "@prisma/client";
import { companyLevel, reqbody } from "src/dtos/CompanyDataDTO"
import { companyService } from "src/providers/company.service";
import { PrismaService } from "src/providers/prisma.service";


@Controller('Company') 
export class companyController{
  constructor(private readonly companyService : companyService,private readonly prisma : PrismaService){}
 @Get('/CompanyData/')
  async getSpecificCompanyData(@Body() body:reqbody){
    return this.companyService.getSpecificCompanydata(body.companyString,body.dateString)
  }
  @Get('/companies/')
  async getAllCompanies(){
    return this.companyService.getCompaniesList();
  } 
}