const express = require('express')
const app = express()

const path = require('path')

const { create } = require('express-handlebars')
const hbs = create({
    extname: '.hbs'
})

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.render('home')
})

// register all apis
const blogApi = require('./apis/blog')
app.use('/blog', blogApi)

module.exports = app