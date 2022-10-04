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

class Brand {
    static all() {
        return brands;
    }
}

module.exports = {
    Brand,
};
