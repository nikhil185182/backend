import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class OrderData {
    @Field()
    OrderDate : Date;
    @Field()
    AttemptedOrders : number;
    @Field()
    CompletedOrders : number;
    @Field()
    TotalOrders : number;
}
