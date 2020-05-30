const models = require('../models');
const createJWT = require( "../middleware/createJWT");

const resolvers = {
    Query: {
        async allUser(root, {args}, {models}) {
            return models.user.findAll()
        },
        async getUser(root, {user_name}, {models}){
            return models.user.findAll({where: {user_name}, raw:true});
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
        },
        async deleteUser (root, {user_name, password},{models}) {
            const delUser = await models.user.destroy({
                where: {user_name, password}
            });
        },
    }
};

module.exports = resolvers;
