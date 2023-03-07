import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class companyLevel {
  @Field()
  Company: string;
  @Field()
  Date: String;
  @Field()
  TotalOrders: number;
}

export type reqbody ={
  companyString:String,
  dateString:String
}
@ObjectType()
export class companiesList{
  @Field({nullable:true})
  CompanyName:String

}
