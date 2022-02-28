import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { HelloModule } from './hello/hello-modue';
import { SavoryNodesModule } from './savory-nodes/savory-nodes.module';


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
})
export class AppModule {}
