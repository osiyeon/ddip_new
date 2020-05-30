const models = require('../models');
const createJWT = require( "../middleware/createJWT");

const resolvers = {
    Query: {
        async allMarket(root, {args}, {models}) {
            return models.market.findAll()
        }
    },
    Mutation: {
    }
};

module.exports = resolvers;
