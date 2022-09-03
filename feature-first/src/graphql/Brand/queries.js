const queries = `
    searchBrand(name: String!) : Brand
    allBrands: [Brand!]!
`;

module.exports = {
    queries,
};
