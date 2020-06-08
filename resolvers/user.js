const models = require('../models');
const createJWT = require( "../middleware/createJWT");

const resolvers = {
    Query: {
        async allUser(root, {args}, {models}) {
            try {
                return models.user.findAll()
            }catch(err){
                console.log(err);
                return false;
            }
        },
        async getUser(root, {user_name}, {models}){
            try {
                return models.user.findAll({where: {user_name}, raw: true});
            }catch(err){
                console.log(err);
                return false;
            }
        }
    },
    Mutation: {
        async addUser (root, {user_name, password, email, gender, tel_user, lat_user, long_user, address, tel_certify, balance, account}, {models}) {
            try {
                const newUser = await models.user.create({
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
                    ok: true,
                    token,
                    user: newUser
                };
            } catch (err) {
                console.log(err);
                return false;
            }
        },
        async deleteUser (root, {user_name, password},{models}) {
            try {
                const delUser = await models.user.destroy({
                    where: {user_name, password}
                });
            } catch (err){
                console.log(err);
                return false;
            }
        },
        async updateUser (root, {user_name,password,email,tel_user,account}, {models}) {
            return models.user.update({password:password,email:email,tel_user:tel_user,account:account},{where: {user_name:user_name}});
        },
    }
};

module.exports = resolvers;
