const Admin = require('../../models/admin');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
exports.create = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.json({
                status: false,
                message: 'name, email and password are required'
            })
        }
        const finduser = await Admin.findOne({email:email});
        if(finduser){
            return res.json({
                status: false,
                message: 'user with this email already exsists'
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const user = new Admin({
            name,
            email,
            password: hashPassword
        });
        const savedUser = await user.save();
        const token = jwt.sign({ id: savedUser._id }, process.env.TOKEN, { expiresIn: '30d' });
        return res.json({
            user,
            message: "Signup Successfull",
            token:token,
            status:true
        });
    } catch (err) {
        res.json({
            status:false,
            message:err.message
        })
    }
}
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.json({
                status: false,
                message: 'email and password are required'
            })
        }
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.json({
                status: false,
                message: 'Admin not found'
            })
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.json({
                status: false,
                message: 'Invalid password'
            })
        }
        const token = jwt.sign({ id: admin._id }, process.env.TOKEN, { expiresIn: '30d' });
        return res.json({
            status: true,
            token: token,
            result: admin
        })
    } catch (err) {
        return res.json({
            status:false,
            message:err.message
        })
    }
}