import { result } from "src/dtos/CompanyDataDTO"

export default interface igeneralCompanySerivce{
     getSpecificCompanydata(customerName: string, dates: string):Promise<result[]>
     getCompaniesList() :Promise<string[]>
}