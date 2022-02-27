import { registerEnumType } from "@nestjs/graphql";

export enum NodeType {
  LIBRARY = "LIBRARY",
  FORM = "FORM",
  DATATYPE = "DATATYPE",
  DATAELEMENT = "DATAELEMENT",
  DATAPOINT = "DATATPOINT",
  DATAVALUE = 'DATAVALUE',
  MAPPINGPATH = "MAPPINGPATH",
}


registerEnumType(NodeType, {
  name: "NodeType",
  description: "Every node that is recognized",
  
  // valuesConfig: {
  //   LIBRARY: {
  //     deprecationReason: "Replaced with Left or Right",
  //   },
  //   FORM: {
  //     description: "The other left",
  //   },
  // },
});