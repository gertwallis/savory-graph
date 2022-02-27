import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class DeleteNodeInput {
  @Field()
  @IsNotEmpty()
  id: string;
}