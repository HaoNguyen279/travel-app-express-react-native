const {getAllUsers} = require('../services/user.service')

class UserController{
    async getAllUsers(req, res, next){
        const data = await getAllUsers();
        res.json(data);
    }
}

module.exports = new UserController;