import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { NodeId } from './../../models/node-id';

import { NodeRelationshipType } from "src/savory-nodes/enums/node-relationship-enum";
import { NodeIdScalar } from "src/savory-nodes/scalars/node-id-scalar";

@InputType()
export class CreateEdgeInput {

  @Field()
  @IsNotEmpty()
  type: NodeRelationshipType;

  @Field(type => NodeIdScalar)
  @IsNotEmpty()
  from: NodeId;

  @Field(type => NodeIdScalar)
  @IsNotEmpty()
  to: NodeId;
}