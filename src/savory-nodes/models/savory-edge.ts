import { NodeIdScalar } from './../scalars/node-id-scalar';
import { Field, ObjectType} from "@nestjs/graphql";
import { NodeId } from './node-id'

@ObjectType()
export class SavoryEdge {
    @Field()
    type: string;

    @Field(type => NodeIdScalar)
    //@Field()
    from: NodeId;

    @Field(type => NodeIdScalar)
    to: NodeId;
  }