import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";
import { NodeId } from "src/savory-nodes/models/node-id";
import { NodeIdScalar } from "src/savory-nodes/scalars/node-id-scalar";

@InputType()
export class UpdateNodeInput {
  @Field(type => NodeIdScalar)
  @IsNotEmpty()
  id: NodeId;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  hash?: number;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  type?: number;

}