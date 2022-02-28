import { ID } from "@nestjs/graphql";
import { SavoryEdge } from "./models/savory-edge";
import { Injectable } from "@nestjs/common";

import { GetNodeArgs } from "./dto/args/get-node-args";
import { GetNodesArgs } from "./dto/args/get-nodes.args";
import { CreateNodeInput } from "./dto/input/create-node.input";
import { DeleteNodeInput } from "./dto/input/delete-node.input";
import { UpdateNodeInput } from "./dto/input/update-node.input";
import { CreateEdgeInput } from "./dto/input/create-edge.input";

import { SavoryNode } from "./models/savory-node";
import { NodeRelationshipType } from "./enums/node-relationship-enum";
import { NodeId } from "./models/node-id";
import { NodeTypeEnum } from "./enums/node-type-enum";

@Injectable()
export class SavoryNodesService {
  private nodes: SavoryNode[] = [];
  private edges: SavoryEdge[] = [];

  constructor() {
    let fromNodeInput = new CreateNodeInput();
    let toNodeInput = new CreateNodeInput();
    let newEdgeInput = new CreateEdgeInput();
    fromNodeInput.hash = 1;
    fromNodeInput.name = "Some Library";
    fromNodeInput.type = NodeTypeEnum.LIBRARY;

    // Form
    let fromNode = this.createNode(fromNodeInput);
    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 1;
    toNodeInput.name = "DL6090";
    toNodeInput.type = NodeTypeEnum.FORM;
    let toNode = this.createNode(toNodeInput);

    newEdgeInput = new CreateEdgeInput();
    newEdgeInput.type = NodeRelationshipType.LIBRARY_FORM;
    newEdgeInput.from = fromNode.id;
    newEdgeInput.to = toNode.id;
    this.createEdge(newEdgeInput);

    // DataType
    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 200;
    toNodeInput.name = "Alphanmeric";
    toNodeInput.type = NodeTypeEnum.DATATYPE;
    toNode = this.createNode(toNodeInput);

    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 3;
    toNodeInput.name = "Money";
    toNodeInput.type = NodeTypeEnum.DATATYPE;

    newEdgeInput = new CreateEdgeInput();
    newEdgeInput.type = NodeRelationshipType.LIBRARY_DATATYPE;
    newEdgeInput.from = fromNode.id;
    newEdgeInput.to = toNode.id;
    this.createEdge(newEdgeInput);

    // First or full name
    toNode = this.createNode(toNodeInput);
    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 4;
    toNodeInput.name = "L_GNL_..._FirstOrFullName.i.j";
    toNodeInput.type = NodeTypeEnum.DATAELEMENT;
    toNode = this.createNode(toNodeInput);

    newEdgeInput = new CreateEdgeInput();
    newEdgeInput.type = NodeRelationshipType.LIBRARY_DATAELEMENT;
    newEdgeInput.from = fromNode.id;
    newEdgeInput.to = toNode.id;
    this.createEdge(newEdgeInput);

    toNode = this.createNode(toNodeInput);
    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 6;
    toNodeInput.name = "L_GNL_..._FirstOrFullName.TRUSTEE_1.BORROWER_1";
    toNodeInput.type = NodeTypeEnum.DATAPOINT;
    toNode = this.createNode(toNodeInput);

    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 7;
    toNodeInput.name = "TRUSTEE_1";
    toNodeInput.type = NodeTypeEnum.DATAVALUE;
    toNode = this.createNode(toNodeInput);

    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 8;
    toNodeInput.name = "BORROWER_1";
    toNodeInput.type = NodeTypeEnum.DATAVALUE;
    toNode = this.createNode(toNodeInput);

    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 9;
    toNodeInput.name = "John Smith";
    toNodeInput.type = NodeTypeEnum.DATAVALUE;
    toNode = this.createNode(toNodeInput);

    // Loan Amount
    toNodeInput.hash = 5;
    toNodeInput.name = "L_GNL_..._LoanAmount";
    toNodeInput.type = NodeTypeEnum.DATAELEMENT;
    toNode = this.createNode(toNodeInput);

    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 10;
    toNodeInput.name = "L_GNL_..._LoanAmount";
    toNodeInput.type = NodeTypeEnum.DATAPOINT;
    toNode = this.createNode(toNodeInput);

    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 11;
    toNodeInput.name = "150000";
    toNodeInput.type = NodeTypeEnum.DATAVALUE;
    toNode = this.createNode(toNodeInput);

    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 12;
    toNodeInput.name = "/TransactionValues/Entities/Entity/...";
    toNodeInput.type = NodeTypeEnum.MAPPINGPATH;
    toNode = this.createNode(toNodeInput);

    toNodeInput = new CreateNodeInput();
    toNodeInput.hash = 13;
    toNodeInput.name = "/TransactionValues/MappingPathForLoanAmount";
    toNodeInput.type = NodeTypeEnum.MAPPINGPATH;
    toNode = this.createNode(toNodeInput);
  }

  public createEdge(createEdgeData: CreateEdgeInput): SavoryEdge {
    const edge: SavoryEdge = {
      ...createEdgeData,
    };

    this.edges.push(edge);
    return edge;
  }

  public createNode(createNodeData: CreateNodeInput): SavoryNode {
    const node: SavoryNode = {
      id: new NodeId(createNodeData.type, createNodeData.hash),
      ...createNodeData,
    };

    this.nodes.push(node);
    return node;
  }

  public updateNode(updateNodeData: UpdateNodeInput): SavoryNode {
    const node = this.nodes.find((node) => node.hash == updateNodeData.hash);

    Object.assign(node, updateNodeData);
    return node;
  }

  public getNode(getNodeArgs: GetNodeArgs): SavoryNode {
    return this.nodes.find((node) => node.id == getNodeArgs.id);
  }

  public getNodes(getNodesArgs: GetNodesArgs): SavoryNode[] {
    return getNodesArgs.ids.map((id) => this.getNode({ id }));
  }

  public getAllNodes(): SavoryNode[] {
    return this.nodes;
  }

  public deleteNode(deleteNodeData: DeleteNodeInput): SavoryNode {
    const nodeIndex = this.nodes.findIndex(
      (node) => node.id === deleteNodeData.id
    );

    const node = this.nodes[nodeIndex];

    this.nodes.splice[nodeIndex];

    return node;
  }
}
