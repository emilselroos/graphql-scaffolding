const { Brand } = require('../../models/Brand.model.js');

const brandResolvers = {
    Query: {
        searchBrand: (root, args) => console.log('No data.'),
        allBrands: () => Brand.all(),
    },
    Mutation: {
        createBrand: (root, args) => {
            const newBrand = {
                name: args.name,
                origin: args.origin
            };
            return newBrand;
        },
    }
};

module.exports = {
    brandResolvers,
};
