import { Module } from "@nestjs/common";
import { SavoryNodesResolver } from "./savory-nodes.resolver";
import { SavoryNodesService } from "./savory-nodes.service";

@Module({
  providers: [SavoryNodesResolver, SavoryNodesService],
})
export class SavoryNodesModule {}

