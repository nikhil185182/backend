import { companyLevel} from "src/dtos/CompanyDataDTO"

export default interface igeneralCompanySerivce{
     getSpecificCompanydata(customerName: string, dates: string):Promise<companyLevel[]>
     getCompaniesList() :Promise<string[]>
}