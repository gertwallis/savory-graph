import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { NodeTypeEnum } from "src/savory-nodes/enums/node-type-enum";

@InputType()
export class CreateNodeInput {

  @Field()
  @IsNotEmpty()
  hash: number;

  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  type: NodeTypeEnum;
}