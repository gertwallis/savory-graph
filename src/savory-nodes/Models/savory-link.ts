import { Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class SavoryLink {
    @Field()
    nodeType: string;

    @Field()
    hash: number;
  }