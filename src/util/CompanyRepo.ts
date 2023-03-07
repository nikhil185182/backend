import { Injectable } from "@nestjs/common/decorators";
import { companyLevel } from "src/dtos/CompanyDataDTO";
import { PrismaService } from "src/providers/prisma.service";

@Injectable()
export class companyRepo{
    constructor(private prisma : PrismaService){}
    async getCompaniesList(){
        return this.prisma.$queryRaw<string[]>`exec companies`;
    }
    async getSpecificCompanyData(companyString : String,dateString:String):Promise<companyLevel[]>{
        return this.prisma.$queryRaw<companyLevel[]>`execute demo ${companyString},${dateString}`;
    }
}