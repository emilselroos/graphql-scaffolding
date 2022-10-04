const { gql } = require('apollo-server');

const brandType = gql`
    type Brand {
        name: String
        origin: String
    }
`;

module.exports = {
    brandType,
};