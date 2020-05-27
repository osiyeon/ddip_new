const createJWT = require( "../middleware/createJWT");

const models = require('../models');

const resolvers = {
    Query: {
        async getUser(root, {args}, {models}) {
            return models.user.findAll()
        }
    },
    Mutation: {
        async addUser (root, {user_name, password, email, gender, tel_user, lat_user, long_user, address, tel_certify, balance, account}, {models}) {
            const newUser = await models.user.create ({
                user_name,
                password,
                email,
                gender,
                tel_user,
                lat_user,
                long_user,
                address,
                tel_certify,
                balance,
                account
            });
            const token = createJWT(newUser.id);
            return {
                ok:true,
                token,
                user:newUser
            };
        }
    }
};

module.exports = resolvers;
