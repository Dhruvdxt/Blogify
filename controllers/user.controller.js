const user = require('../models/user.model');
const jwt = require('jsonwebtoken');


//Create
exports.handleSignUpUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        const newUser = new user({
            userName,
            email,
            password
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Read All
exports.handleGetAllUsers = async (req, res) => {
    const allUsers = await user.find({});
    return res.json(allUsers);
};

//Read One
exports.handleGetUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await user.findById(id).populate('posts comments likes');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Login 
exports.handleSignInUserByUsernameAndPass = async (req, res) => {
    try{
        //Finding the user with requested email
        const user = await user.findOne({username: req.body.username});
        if(!user){
            res.json({status: "User does not exist with this username."});
            return ;
        }
        //Matching the password
        const isMatch = await user.comparePassword(req.body.password);
        if(isMatch === false){
            res.json({status: "Password is incorrect."});
            return ;
        }
        //Generating the token
        const token = await jwt.sign({_id: user._id, userName: user.userName}, "secretKey", {expiresIn: '1h'});
        //sending the response
        return res.json({status: true, token: token});
    }
    catch(err){
        throw err;
    }
};

//Update
exports.handleUpdateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (updateData.password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(updateData.password, salt);
        }

        const updatedUser = await user.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Delete
exports.handleDeleteUserById = async (req, res) => {
    await user.findByIdAndDelete(req.body.userId);
    return res.json({status: "User is deleted successfully"});
};