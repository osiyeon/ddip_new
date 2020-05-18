const models = require('./models');

const resolvers = {
    Query: {
        async getUser(root, {id}, {models}) {
            //models.collection('user') mongodb 콜렉션 접근
            //.find()
            //.toArray() 콜렉션 안의 모든 document를 리스트로 받아서 배열로 변환
            return models.user.findAll()
            //return models.user.findByPk(id)
        },
        //me: (parent, args, { currentUser }) => currentUser,
    },
    Mutation: {
        async addUser (root, {user_name, password, email, gender, tel_user, lat_user, long_user, address, tel_certify, balance, account}, {models}) {
            return models.user.create ({
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
            })
            //photos.push(newUser)
            //return newUser
        }
    },
    /*
    Student: {
        async hobbies(hobbies) {
            return hobbies.getHobbies()
        }
    },
    Hobbies: {
        async student(student){
            return student.getStudent()
        }
    }
     */
}

module.exports = resolvers;