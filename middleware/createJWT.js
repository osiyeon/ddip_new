const jwt = require("jsonwebtoken");

const createJWT = (userId) => {
    const token = jwt.sign({
        id:userId
    },process.env.JWT_TOKEN||"");
    return token;
};

module.exports = createJWT;
