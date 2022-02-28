import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class NodeId {

  @Field()
  type: string;

  @Field(() => Int)
  hash: number;

  constructor(type: string, hash: number) {
    //console.log (type + ':' + hash);
    this.type = type;
    this.hash = hash;
  }
}