const { LIST } = require("../data")

const add = (_,{value}) => {
    LIST.push(value);

    return LIST;
}

const removeLast = () => {

    return LIST.length === 0 ? []: LIST.splice(LIST.length -1,1);
}

const resolversMutations = {

    Mutation: {
        add,
        removeLast   
    }
}
module.exports = resolversMutations;