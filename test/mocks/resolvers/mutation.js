const { LIST } = require("../data")

const add = (_,{value}) => {

}

const removeLast = () => {

    LIST.push(value);

    return LIST;
}

const resolversMutations = {

    Mutation: {
        add,
        removeLast   
    }
}
module.exports = resolversMutations;