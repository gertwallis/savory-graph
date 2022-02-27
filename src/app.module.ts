import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloModule } from './hello/hello-modue';
import { SavoryNodesModule } from './savory-nodes/savory-nodes.module';
import { HelloResolver } from './hello/hello.resolver';
import { SavoryNodesResolver } from './savory-nodes/savory-nodes.resolver';
import { SavoryNodesService } from './savory-nodes/savory-nodes.service';


@Module({
  imports: [
    SavoryNodesModule, HelloModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,//join(process.cwd(), 'src/schema.gql'),
      debug: false,
      playground: true
    })
  ],
  providers: [],
})
export class AppModule {}
