import { IResolvers } from 'graphql-tools';

// Los resolvers de las operaciones de modificación de información

let values: [string] = ["hola"];
const mutation: IResolvers = {
    Mutation: {
        add(_:void, {value}) {

            values.push(value);

            return [...values];
        },
        removeLast(_:void, {}) {


            return values[0]? values.splice(values.length - 1,1 ) : []  ;
        }
    }
};

export default mutation;