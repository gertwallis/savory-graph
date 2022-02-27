import { InputType } from "@nestjs/graphql";
import {NodeType} from "./../enums/node-type-enum"

@InputType()
class NodeId {

  type: NodeType;
  hash: number;

  constructor(type: NodeType, hash: number) {
    this.type = type;
    this.hash = hash;
  }
}