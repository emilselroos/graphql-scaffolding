const { queries } = require('./queries.js');
const { mutations } = require('./mutations.js');
const resolvers = require('./resolvers.js');
const { types } = require('./types.js');

module.exports = {
    queries,
    mutations,
    resolvers,
    types
};
