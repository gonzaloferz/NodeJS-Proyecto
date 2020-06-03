const User = require('../models/usuario');

module.exports = {
 
    index: async (req, res, next) => {
        const users= await User.find({});
        res.status(200).json(users);
    }

};