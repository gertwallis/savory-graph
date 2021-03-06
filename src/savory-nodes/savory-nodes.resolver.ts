import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetNodeIdArgs } from './dto/args/get-nodeid-args';
import { GetNodesArgs } from "./dto/args/get-nodes.args";
import { GetNodeTypeArgs } from './dto/args/get-nodetype-args';

import { CreateNodeInput } from './dto/input/create-node.input';
import { DeleteNodeInput } from './dto/input/delete-node.input';
import { UpdateNodeInput } from './dto/input/update-node.input';

import { SavoryNode } from "./models/savory-node";
import { SavoryNodesService } from "./savory-nodes.service";

@Resolver()
export class SavoryNodesResolver {
    constructor(private readonly nodesService: SavoryNodesService) {
    }

    @Query(() => SavoryNode, {name: 'node', nullable: true})
    getNode(@Args() getNodeArgs: GetNodeIdArgs): SavoryNode {
        return this.nodesService.getNodeById(getNodeArgs);
    }

    @Query(() => [SavoryNode], {name: 'nodes', nullable: 'items'})
    getNodes(@Args() getNodesargs: GetNodesArgs): SavoryNode[] {
        console.log('nodes');
        return this.nodesService.getNodesById(getNodesargs);
    }

    // @Query(() => [SavoryNode], {name: 'nodesById', nullable: 'items'})
    // getNodesById(@Args() getNodesargs: GetNodesArgs): SavoryNode[] {
    //     console.log('nodes');
    //     return this.nodesService.getNodes(getNodesargs);
    // }

    @Query(() => [SavoryNode], {name: 'nodesByType', nullable: 'items'})
    getNodesByType(@Args() getNodesargs: GetNodeTypeArgs): SavoryNode[] {
        console.log('nodes');
        return this.nodesService.getNodesByType(getNodesargs);
    }

    @Query(() => [SavoryNode], {name: 'allNodes', nullable: 'items'})
    getAllNodes(): SavoryNode[] {
        console.log('nodes');
        return this.nodesService.getAllNodes();
    }

    @Mutation(() => SavoryNode)
    createNode(@Args('createNodeData') createNodeData: CreateNodeInput): SavoryNode {
        return this.nodesService.createNode(createNodeData);
    }

    @Mutation(() => SavoryNode)
    updateNode(@Args('updateNodeData') updateNodeDataL: UpdateNodeInput): SavoryNode{
        return  this.nodesService.updateNode(updateNodeDataL);
    }

    @Mutation(() => SavoryNode)
    deleteNode (@Args('deleteNodeData') deleteNodeData: DeleteNodeInput) : SavoryNode {
        return this.nodesService.deleteNode(deleteNodeData);
    } 
}