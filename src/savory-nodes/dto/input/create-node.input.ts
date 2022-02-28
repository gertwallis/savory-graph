import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

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
  type: string;
}