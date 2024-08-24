const isSuperAdmin = async (req,res,next) => {
    try {
        const {role} = req.userData;
        if(role == 'superAdmin') {
            next();
        }
        return res.status(401).json({message: "Your are not authorized"});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
}

const isAdmin = async (req,res,next) => {
    try {
        const {role} = req.userData;
        if(role == 'admin' || role == 'superAdmin') {
            next();
        }
        else return res.status(401).json({message: "Your are not authorized"});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = {isSuperAdmin, isAdmin};