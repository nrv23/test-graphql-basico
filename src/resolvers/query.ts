import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        hello(): string {
            return 'Hello world!!';
        },
        helloWithName(_: void, args): string {
            return `Hello ${args.name}!!`;
        },
        helloToGraphQLCourse(): string {
            return 'Hello to GraphQL Course!!';
        },
        list() {

            return ["1","2","3"]
        }
    }
};

export default query;