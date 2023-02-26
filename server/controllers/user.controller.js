const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports = {
    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY)
                res
                    .cookie('usertoken', userToken, {httpOnly:true})
                    .json({msg: 'user succesfully registered!', user: user});
            })
            .catch(err => res.status(400).json(err));
        },
    login: async(req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if(user === null) {
            return res.status(400).json({message: 'Email address not found'});
        }
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if(!correctPassword){
            return res.status(400).json({message: 'Incorrect Password'});
        }
        const userToken = jwt.sign({ id: user._id}, process.env.SECRET_KEY);

        res
            .cookie('usertoken', userToken, {httpOnly: true})
            .json({ msg: 'User successfuly logged in', user: user})
    }, 

    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.status(200).json({msg:"succesfully logged out"})
    },



    getUserTodos: (req, res) => {
        console.log(req.user.id)
        User.findOne({_id: req.user.id})
            .populate('todos')
            .then(user => res.json({user:user}))
            .catch(err => res.status(404).json(err))
    }
}