const Brand = require('./Brand');

const resolvers = {
    Query: {
        ...Brand.resolvers.queries,
    },
    Mutation: {
        ...Brand.resolvers.mutations,
    }
};

module.exports = {
    resolvers
};
