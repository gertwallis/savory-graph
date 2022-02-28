import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray, IsNotEmpty } from "class-validator";
import { NodeId } from "src/savory-nodes/models/node-id";
import { NodeIdScalar } from "src/savory-nodes/scalars/node-id-scalar";

@ArgsType()
export class GetNodesArgs {
  
  @Field(() => [NodeIdScalar])
  @IsArray()
  ids: NodeId[];
}