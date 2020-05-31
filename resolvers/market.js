const models = require('../models');
const createJWT = require( "../middleware/createJWT");

const resolvers = {
    Query: {
        async allMarket(root, {args}, {models}) {
            try {
                return models.market.findAll()
            }catch(err){
                console.log(err);
                return false;
            }
        }
    },
    Mutation: {
    }
};

module.exports = resolvers;
