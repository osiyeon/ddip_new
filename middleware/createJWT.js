const jwt = require("jsonwebtoken");

const createJWT = (userId) => {
    const token = jwt.sign({
        id:userId
    },process.env.JWT_TOKEN||"");
    return token;
};

<<<<<<< HEAD
module.exports = createJWT;
=======
module.exports = createJWT;
>>>>>>> origin/master
