import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { NodeId } from "src/savory-nodes/models/node-id";
import { NodeIdScalar } from "src/savory-nodes/scalars/node-id-scalar";

@ArgsType()
export class GetNodeIdArgs {
  
  @Field(type => NodeIdScalar)
  @IsNotEmpty()
  id: NodeId;
}