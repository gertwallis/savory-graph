import { NodeType } from '../models/node-constants';
import { GraphQLScalarType, Kind } from "graphql";
import { NodeId } from '../models/node-id';

export const NodeIdScalar = new GraphQLScalarType({
  name: "NodeId",
  description:
    "Id of a hash node as '<type>:<hash>'. Example: 'DATAVALUE:123456'",
  serialize(value: NodeId): string {
    console.log("NodeIdScalar.serialize():" + value);
    return value.type + ":" + value.hash;
  },

  parseValue(value: unknown): Object {
    // check the type of received value
    //   if (typeof value !== "string") {
    //     throw new Error("ObjectIdScalar can only parse string values");
    //   }
    //   return new ObjectId(value); // value from the client input variables
    console.log("nodeIdScalar.parseValue():" + value);

    return "something";
  },

  parseLiteral(ast): NodeId {
    let idString = ast.loc.source.body.substring(ast.loc.start+1, ast.loc.end);
    //console.log(idString);
    var split = idString.split(":")
    return new NodeId(split[0], parseInt(split[1],10));
  },
});
