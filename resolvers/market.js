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
        async addMarket (root, {market_name, address, tel_market, deli_market}, {models}) {
            try {
                return models.market.create ({market_name, address, tel_market, deli_market})
            }catch(err){
                console.log(err);
                return false;
            }
        }
    }
};

module.exports = resolvers;
