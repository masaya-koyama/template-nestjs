import { ApolloDriverConfig } from './../node_modules/@nestjs/apollo/dist/interfaces/apollo-driver-config.interface.d';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'database/schema.gql'),
    }),
  ],
})
export class AppModule {}
