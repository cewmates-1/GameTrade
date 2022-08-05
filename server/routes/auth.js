const {Router, response, request} = require('express');
const {hashPassword, comparePassword} =  require('../utils/helpers')
const User = require('../model/schemas/User');

const router = Router();

router.post('/register', async (req, res) => {
    const {email, fullName} = req.body;
    const dbUser = await User.findOne({$or: [{email}]});
    if (dbUser) {
        response.status(400).send({msg: 'User already exists!'});
    }
    else{
        const password = hashPassword(req.body.password);
        const newUser = await User.create({email, password, fullName});
        response.status(200).send({msg: `${fullName} joined the network!`});
    }

});

router.post('/login', async (req, res) => {
    const {email, password } = req.body;
    if(!email || !password) return res.status(400).send({msg: 'Please enter all fields'});
    const dbUser = await User.findOne({email});
    if(!dbUser) return res.status.send(401).send({msg: 'User not found'});
    const isValid = await comparePassword(password, dbUser.password);
    if (isValid){
        req.session.user = dbUser;
        response.status(200).send({msg: `${fullName} logged in!`});
    }
    else return res.status(401).send({msg: 'Invalid credentials'});
});