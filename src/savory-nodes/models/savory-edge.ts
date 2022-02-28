import { NodeIdScalar } from './../scalars/node-id-scalar';
import { Field, ObjectType} from "@nestjs/graphql";
import { NodeId } from './node-id'
import {NodeRelationshipType} from "../enums/node-relationship-enum"

@ObjectType()
export class SavoryEdge {
    @Field()
    type: NodeRelationshipType;

    @Field(type => NodeIdScalar)
    //@Field()
    from: NodeId;

    @Field(type => NodeIdScalar)
    to: NodeId;
  }