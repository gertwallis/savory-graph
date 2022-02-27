import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateNodeInput {
  @Field()
  @IsNotEmpty()
  id: number;

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