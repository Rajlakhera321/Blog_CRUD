const {userModel} = require("../model");
const superAdminJson = require('./seederData.json')
const bcrypt = require("bcrypt");

const superAdminSeed = async () => {
    try {
        let password = bcrypt.hashSync(superAdminJson.password, 10);
        superAdminJson.password = password
        const superAdminType = await userModel.findOne({role: 'superAdmin'});
        if (superAdminType) {
            console.log(`Super admin is already added`);
            return false;
        }
        await userModel.create(superAdminJson);
        console.log(`Super admin are created successfully`);
    } catch (error) {
        console.log(error);
    };
};

module.exports = {superAdminSeed}