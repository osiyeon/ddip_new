const models = require('../models');
const createJWT = require( "../middleware/createJWT");

const resolvers = {
    Query: {
        async allProduct(root, {args}, {models}) {
            return models.product.findAll()
        }
    },
    Mutation: {
    }
};

module.exports = resolvers;
