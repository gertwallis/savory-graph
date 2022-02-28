import { registerEnumType } from "@nestjs/graphql";

export enum NodeTypeEnum {
  LIBRARY = "LIBRARY",
  FORM = "FORM",
  DATATYPE = "DATATYPE",
  DATAELEMENT = "DATAELEMENT",
  DATAPOINT = "DATATPOINT",
  DATAVALUE = "DATAVALUE",
  MAPPINGPATH = "MAPPINGPATH",
}

registerEnumType(NodeTypeEnum, {
  name: "NodeType",
  description: "Savory node",
  valuesMap: {
    LIBRARY: {
      description: "Library Node: Entry point into the library dictionary",
    },
    FORM: {
      description: "Form Node: FXL",
    },
    DATAELEMENT: { 
      description: "DATAELEMENT"
    },
    DATAPOINT: { 
      description: "DATATPOINT"
    },
    DATAVALUE: { 
      description: "DATAVALUE"
    },
    MAPPINGPATH: { 
      description: "MAPPINGPATH"
    },
  }
});
