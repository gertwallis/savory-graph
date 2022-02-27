import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray, IsNotEmpty } from "class-validator";

@ArgsType()
export class GetNodesArgs {
  
  @Field(() => [String])
  @IsArray()
  ids: string[];
}