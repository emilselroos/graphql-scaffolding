const { ApolloServer, gql } = require('apollo-server');

const brands = [
    {
        name: "Jaguar",
        origin: "GB"
    },
    {
        name: "BMW",
        origin: "DE"
    },
    {
        name: "Audi",
        origin: "DE"
    }
];

const typeDefs = gql`

    type Brand {
        name: String
        origin: String
    }

    type Query {
        brands: [Brand]
    }
    
`;

const resolvers = {
    Query: {
        brands: () => brands,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server up & listening ${url}`);
});
