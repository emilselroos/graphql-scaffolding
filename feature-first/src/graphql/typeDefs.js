const { gql } = require('apollo-server');
const Brand = require('./Brand');

const typeDefs = gql`

    ${Brand.types}
    
    type Query {
        ${Brand.queries}
    }
    
    type Mutation {
        ${Brand.mutations}
    }

`;

module.exports = {
    typeDefs
};
