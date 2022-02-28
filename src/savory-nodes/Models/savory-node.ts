import { Field, ID, Int, ObjectType} from "@nestjs/graphql";
import { NodeIdScalar } from "../scalars/node-id-scalar";
import { NodeId } from "./node-id";

@ObjectType()
export class SavoryNode {
    @Field(type => NodeIdScalar)
    id: NodeId;

    @Field()
    type : string;

    @Field(() => Int)
    hash : number;
    
    @Field()
    name : string;

}