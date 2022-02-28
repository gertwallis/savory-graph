import { registerEnumType } from "@nestjs/graphql";

export enum NodeRelationshipType {
  LIBRARY_FORM = "LIBRARY_FORM",
  LIBRARY_DATAELEMENT = "LIBRARY_DATAELEMENT",
  LIBRARY_DATATYPE = "LIBRARY_DATATYPE",
  DATAELEMENT_DATAPOINT = "DATAELEMENT_DATAPOINT",
  DATAELEMENT_DATATYPE = "DATAELEMENT_DATATYPE",
  DATAPOINT_MAPPINGPATH = "DATATPOINT_MAPPINGPATH",
}

registerEnumType(NodeRelationshipType, {
  name: "NodeRelationshipType",
  description: "Types of relationships between nodes",
});