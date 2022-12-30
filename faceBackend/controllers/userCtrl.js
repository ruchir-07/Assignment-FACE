const Users = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const userCtrl = {

    register: async (req, res) =>
    {
        try
        {
            const { username, password } = req.body
            const user = await Users.findOne({ username })
            if (user) return res.status(400).json({ msg: "the username already exist" })

            //Password Encryption
            const passwordHash = await bcrypt.hash(password, 12)
            const newUser = new Users({
                username, password: passwordHash
            })

            //save mongoDB
            await newUser.save()

            //then create jsonwebtoken to authentication
            // const accesstoken = createAccessToken({ id: newUser._id })
            // const refreshtoken = createRefreshToken({ id: newUser._id })
            // res.cookie('refreshtoken', refreshtoken, {
            //     httpOnly: true,
            //     path: '/user/refresh_token'
            // })
            res.json({ newUser })



            res.json({ msg: "Register Success!!" })

        } catch (err)
        {
            return res.status(500).json({ msg: err.message })
        }
    },
    login: async (req, res) =>
    {
        try
        {
            const { username, password } = req.body
            const user = await Users.findOne({ username })
            if (!user) return res.status(400).json({ msg: "This username does not exist." })

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ msg: "Password is incorrect." })
            // console.log(user);
            // const refresh_token = createRefreshToken({ id: user._id })

            // res.cookie('refreshtoken', refresh_token, {
            //     httpOnly: true,
            //     path: '/user/refresh_token',
            //     maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            // })

            res.json({ msg: "Login success!" })
        } catch (error)
        {
            return res.status(500).json({ msg: error.message })
        }
    },
    logout: async (req, res) =>
    {
        try
        {
            res.clearCookie()
            return res.json({ msg: "Logged out" })
        } catch (error)
        {
            return res.status(500).json({ msg: error.message })
        }
    },


}


module.exports = userCtrl
