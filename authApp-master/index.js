const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const mongoose = require('mongoose')
const routes = require('./routes')

const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 60000
    }
})

require('./models/userInfo')


const app = express()

app.use(express.static(__dirname))

// body-parser middleware, which will help us parse the body of our requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


// express-session middleware to help us save the session cookie
app.use(expressSession)

// require passport and initialize it along with its session authentication middleware, directly inside our Express app
app.use(passport.initialize())
app.use(passport.session())

// RoUTES
app.use('/', routes)


// process.env.PORT to set the port to the environment port variable if it exists. Otherwise, we’ll default to 3000
const port = process.env.PORT || 3000

// mongoose set up
mongoose.connect('mongodb://localhost/MyDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(port, () => {
    console.log(`http://localhost:3000/`)
})

