import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetNodeTypeArgs {
  
  @Field()
  type: string;
}