import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator"
import { companyLevel } from "src/dtos/CompanyDataDTO"
import igeneralCompanySerivce from "src/interfaces/igeneralCompanyService"
import {companyRepo} from "src/util/CompanyRepo"



@Injectable()
export class companyService implements igeneralCompanySerivce{
    constructor(private CompanyRepo:companyRepo) {}

    async getSpecificCompanydata(customerName: String, dates: String):Promise<companyLevel[]> {
        return this.CompanyRepo.getSpecificCompanyData(customerName,dates);
    }
    async getCompaniesList() :Promise<string[]> {
        return this.CompanyRepo.getCompaniesList();
      }
}