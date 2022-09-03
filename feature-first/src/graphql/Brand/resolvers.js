const queries = {
    searchBrand: (root, args) => console.log('No data.'),
    allBrands: () => brands,
};
  
const mutations = {
    createBrand: (root, args) => {
        const newBrand = {
            name: args.name,
            origin: args.origin
        };
        return newBrand;
    },
};

module.exports = {
    queries,
    mutations
};
