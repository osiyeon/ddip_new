const models = require('../models')
const createJWT = require( '../middleware/createJWT')
const privateResolver = require('./privateResolver')

const resolvers = {
    Query: {
        allUser(root, args, {models}) {
            try {
                return models.user.findAll()
            } catch(err){
                console.log(err);
                return false;
            }
        },
        getUser: async(root, args, {models}) => {
            const { req: { user } } = models;
            return {
                user
            }
        }
    },
    Mutation: {
        addUser: async (root, {user_name, password, email, gender, tel_user, lat_user, long_user, address, tel_certify, balance, account}, {models}) => {
            const newUser = await models.user.create({
                user_name, password, email, gender, tel_user, lat_user, long_user, address, tel_certify, balance, account
            });
            const token = createJWT(newUser.id);
            return {
                ok: true,
                error: null,
                token: token
            }
        },
        async deleteUser (root, {user_name, password},{models}) {
            try {
                const delUser = await models.user.destroy({
                    where: {user_name, password}
                });
                return{
                    ok: true,
                    error: null
                }
            } catch (err) {
                console.log(err);
                return false;
            }
        }
    }
};

module.exports = resolvers;
