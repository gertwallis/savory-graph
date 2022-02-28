import { NodeTypeEnum } from './../enums/node-type-enum';
import { GraphQLScalarType, Kind } from "graphql";

export const NodeIdScalar = new GraphQLScalarType({
  name: "NodeId",
  description:
    "Id of a node consisting of it's type and hash. Example: 'dataValue:123456'",
  serialize(value: unknown): string {
    // check the type of received value
    // if (!(value instanceof ObjectId)) {
    //   throw new Error("ObjectIdScalar can only serialize ObjectId values");
    // }

    // return value.toHexString(); // value sent to the client
    console.log("NodeIdScalar.serialize():" + value);
    return "idvalue" + value;
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

  parseLiteral(ast): Object {
    // check the type of received value
    // if (ast.kind !== Kind.STRING) {
    //   throw new Error("ObjectIdScalar can only parse string values");
    // }
    // return new ObjectId(ast.value); // value from the client query
    console.log("---------------------");

    let idString = ast.loc.source.body.substring(ast.loc.start, ast.loc.end);
    var split = idString.split(":")
    console.log("Type:", split[0]);
    console.log("Hash:", split[1]);
    var  nodeType = NodeTypeEnum[split[0]];
    console.log("Node Type:", nodeType);

    return Object;
  },
});
