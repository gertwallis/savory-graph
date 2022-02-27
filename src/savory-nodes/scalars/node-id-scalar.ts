import { GraphQLScalarType, Kind } from "graphql";

export const nodeIdScalar = new GraphQLScalarType({
  name: "NodeId",
  description:
    "Id of a node consisting of it's type and hash. Example: 'dataValue:123456'",
  serialize(value: unknown): string {
    // check the type of received value
    // if (!(value instanceof ObjectId)) {
    //   throw new Error("ObjectIdScalar can only serialize ObjectId values");
    // }

    // return value.toHexString(); // value sent to the client
    console.log("nodeIdScalar.serialize():" + value);
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

    console.log("nodeIdScalar.parseLiteral():" + ast);
    return Object;
  },
});
