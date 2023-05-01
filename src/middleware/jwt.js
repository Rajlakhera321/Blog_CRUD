const jwt = require("jsonwebtoken")

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        const {data} = await jwt.verify(token, process.env.JWT_SECRET)
        req.userData = data
        next()
    } catch (error) {
        return res.status(400).json({message: "invalid token"});
    }
}

module.exports = {
    verifyToken
}
