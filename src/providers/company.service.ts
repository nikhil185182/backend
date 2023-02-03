import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator"
import { result } from "src/dtos/CompanyDataDTO"
import igeneralCompanySerivce from "src/interfaces/igeneralCompanyService"
import { PrismaService } from "./prisma.service"

@Injectable()
export class companyService implements igeneralCompanySerivce{
    constructor(private prismautil: PrismaService) {}
    async getSpecificCompanydata(customerName: string, dates: string):Promise<result[]> {
        return this.prismautil.$queryRaw`execute company ${customerName},${dates}`
    }
    async getCompaniesList() :Promise<string[]> {
        return this.prismautil.$queryRaw`execute companies`
      }
}