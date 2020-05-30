const models = require('../models');
const createJWT = require( "../middleware/createJWT");

const resolvers = {
    Query: {
        async allProduct(root, {args}, {models}) {
            try {
                return models.product.findAll()
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
