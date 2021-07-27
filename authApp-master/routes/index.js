const express = require('express')
const path = require('path')
const passport = require('passport')
const connectEnsureLogin = require('connect-ensure-login')
const router = express.Router()


/* USER trying to login */
router.post('/login', function (req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err)
        }

        if (!user) {
            return res.redirect('login?info=' + info)
        }

        req.login(user, (err) => {
            if (err) {
                return next(err)
            }

            return res.redirect('/')
        })
    })(req, res, next)
})

/* Login PAGE */
router.get('/login', (req, res, next) => {
    console.log(path.join(__dirname, '../html'))
    res.sendFile('html/login.html', {
        root: path.join(__dirname, '../')
    })
})

router.get('/', connectEnsureLogin.ensureLoggedIn(), (req, res, next) => {
    res.sendFile('html/index.html', {
        root: path.join(__dirname, '../')
    })
})

router.get('/private', connectEnsureLogin.ensureLoggedIn(), (req, res, next) => {
    res.sendFile('html/private.html', {
        root: path.join(__dirname, '../')
    })
})

router.get('/user', connectEnsureLogin.ensureLoggedIn(), (req, res, next) => {
    res.send({user: req.user})
})

router.get('/logout', (req, res, next) => {
    req.logout()
    // HERE
    // We can approach it two ways one log out form the system and redirect them to the login page
    res.redirect('/login')

    // OR Show them login page instead logout.lhtml since its missing
    // res.sendFile('html/login.html', {
    //     root: path.join(__dirname, '../')
    // })
})

module.exports = router