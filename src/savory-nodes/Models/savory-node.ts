import { Field, ID, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class SavoryNode {
    @Field()
    id: string;

    @Field()
    type : string;

    @Field(() => Int)
    hash : number;
    
    @Field()
    name : string;

}