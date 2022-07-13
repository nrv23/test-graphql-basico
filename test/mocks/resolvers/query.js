const { LIST } = require("../data");



const hello = () => "Hello World!!";
const helloWithName = (_, args) => {
    return `Hello ${args.name}!!`;
}
const helloToGraphQLCourse = () => 'Hello to GraphQL Course!!';
const list = ()  => LIST;

const resolverQueries = { 

    Query: {
        hello,
        helloWithName,
        helloToGraphQLCourse,
        list
    }
}

module.exports = {
    resolverQueries
}