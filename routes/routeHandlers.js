// root\routes\routeHandlers.js

const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const { chatbotControler } = require('../controlers/chatBotController')

//routes object
const router = express.Router()


// route-1 show home page
router.get('/home', (req, res) => {
    res.render('home.ejs')
})

//route-2 chatBot
router.post('/chat-bot', chatbotControler)

module.exports = router