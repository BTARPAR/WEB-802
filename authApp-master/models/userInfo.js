const passport = require('passport')
const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')


const UserDetail = new mongoose.Schema({
    username: String,
    password: String
})

UserDetail.plugin(passportLocalMongoose)
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo')

/* Implementing Local Authentication */
passport.use(UserDetails.createStrategy())
passport.serializeUser(UserDetails.serializeUser())
passport.deserializeUser(UserDetails.deserializeUser())
//ADD USERS
// UserDetails.register({username:'paul', active:false}, 'paul')
// UserDetails.register({username:'joy', active:false}, 'joy')
// UserDetails.register({username:'ray', active:false}, 'ray')

module.exports = UserDetails