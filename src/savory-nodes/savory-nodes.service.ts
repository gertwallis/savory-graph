import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { GetNodeArgs } from './dto/args/get-node-args';
import { GetNodesArgs } from './dto/args/get-nodes.args';
import { CreateNodeInput } from './dto/input/create-node.input';
import { DeleteNodeInput } from './dto/input/delete-node.input';
import { UpdateNodeInput } from './dto/input/update-node.input';

import { SavoryNode } from './Models/savory-node';

@Injectable()
export class SavoryNodesService {
  private nodes: SavoryNode[] = [];
  constructor () {
    let newNode = new CreateNodeInput();
    newNode.hash = 1;
    newNode.name = 'Some Library';
    newNode.type = 'LIBRARY';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 1;
    newNode.name = 'DL6090';
    newNode.type = 'FORM';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 2;
    newNode.name = 'Alphanmeric';
    newNode.type = 'DATATYPE';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 3;
    newNode.name = 'Money';
    newNode.type = 'DATATYPE';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 4;
    newNode.name = 'L_GNL_..._FirstOrFullName.i.j';
    newNode.type = 'DATAELEMENT';
    this.createNode(newNode);
    newNode.hash = 5;
    newNode.name = 'L_GNL_..._LoanAmount';
    newNode.type = 'DATAELEMENT';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 6;
    newNode.name = 'L_GNL_..._FirstOrFullName.TRUSTEE_1.BORROWER_1';
    newNode.type = 'DATAPOINT';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 7;
    newNode.name = 'TRUSTEE_1';
    newNode.type = 'DATAVALUE';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 8;
    newNode.name = 'BORROWER_1';
    newNode.type = 'DATAVALUE';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 9;
    newNode.name = 'John Smith';
    newNode.type = 'DATAVALUE';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 10;
    newNode.name = 'L_GNL_..._LoanAmount';
    newNode.type = 'DATAPOINT';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 11;
    newNode.name = '150000';
    newNode.type = 'DATAVALUE';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 12;
    newNode.name = '/TransactionValues/Entities/Entity/...';
    newNode.type = 'MAPPINGPATH';
    this.createNode(newNode);
    newNode = new CreateNodeInput();
    newNode.hash = 13;
    newNode.name = '/TransactionValues/MappingPathForLoanAmount';
    newNode.type = 'MAPPINGPATH';
    this.createNode(newNode);
  }

  public createNode(createNodeData: CreateNodeInput): SavoryNode {
    const node: SavoryNode = {
      //id: uuidv4(),
      id: createNodeData.type.toString() + ':' + createNodeData.hash,
      ...createNodeData
    }

    this.nodes.push(node);
    return node;
  }

  public updateNode(updateNodeData: UpdateNodeInput): SavoryNode {
    const node = this.nodes.find(node => node.hash == updateNodeData.hash);

    Object.assign(node, updateNodeData);
    return node;
  }

  public getNode(getNodeArgs: GetNodeArgs): SavoryNode {
    return this.nodes.find(node => node.id == getNodeArgs.id);
  }

  public getNodes(getNodesArgs: GetNodesArgs): SavoryNode[] {
     return getNodesArgs.ids.map(id => this.getNode({id}));
  }

  public getAllNodes(): SavoryNode[] {
    return this.nodes;
 }

  public deleteNode(deleteNodeData: DeleteNodeInput): SavoryNode {
     const nodeIndex = this.nodes.findIndex(node => node.id === deleteNodeData.id);

     const node = this.nodes[nodeIndex];

     this.nodes.splice[nodeIndex]

     return node;
  }

}