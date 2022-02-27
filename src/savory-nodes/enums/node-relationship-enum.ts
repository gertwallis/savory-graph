import { registerEnumType } from "@nestjs/graphql";

enum NodeRelationship {
  LIBRARY_FORM = "LIBRARY_FORM",
  LIBRARY_DATAELEMENT = "LIBRARY_DATAELEMENT",
  LIBRARY_DATATYPE = "LIBRARY_DATATYPE",
  DATAELEMENT_DATAPOINT = "DATAELEMENT_DATAPOINT",
  DATAELEMENT_DATATYPE = "DATAELEMENT_DATATYPE",
  DATAPOINT_MAPPINGPATH = "DATATPOINT_MAPPINGPATH",
}

registerEnumType(NodeRelationship, {
  name: "NodeRelationship",
  description: "Types of relationships between nodes",
  // valuesConfig: {
  //   LIBRARY: {
  //     deprecationReason: "Replaced with Left or Right",
  //   },
  //   FORM: {
  //     description: "The other left",
  //   },
  // },
});