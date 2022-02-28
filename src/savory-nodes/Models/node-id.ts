import { InputType } from "@nestjs/graphql";
import {NodeTypeEnum} from "../enums/node-type-enum"

@InputType()
export class NodeId {

  type: NodeTypeEnum;
  hash: number;

  constructor(type: NodeTypeEnum, hash: number) {
    this.type = type;
    this.hash = hash;
  }
}