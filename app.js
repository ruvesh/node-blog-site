const express = require('express')
const morgan = require('morgan')
const mongoose =  require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

// create express app
const app = express()

// Mongo DB connection
const dbURI = 'mongodb+srv://ruv:rvhunter47@cluster0.fvtpw.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)  =>{
        console.log('Connected to Db')
        // listen to requests
        app.listen(process.env.PORT || 3000)
    })
    .catch((err) => {
        console.log(err)
    })
// register view engine
app.set('view engine', 'ejs')

// middleware for static files 
app.use(express.static('public'))
// middleware for form data
app.use(express.urlencoded({ extended: true }))
// Logger middleware
app.use(morgan('dev'))

// routes
app.get('/', (req, res)=>{
    res.render('index', { title : 'Home' })
})

app.get('/about', (req, res)=>{
    res.render('about', { title: 'About'})
})

// blog routes
app.use('/blogs', blogRoutes)

// 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
})
