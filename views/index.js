const express = require('express')
const app = express()


// setting up handlebars view engine

// creates a view engine and cobfigures express to use it by default.
const handlebars = require('express3-handlebars').create({defaultLayout:'main'})
app.engine('handlebars', handlebars.engine)
app.set('view engine','handlebars')

app.set('port', process.env.PORT || 5000)


// app.get(), is a method for adding routes
/*
the method takes two params 
1. a path; what defines the route
2. a function; will be invoked when there's a match for the route
*/

app.get('/',function (req, res) {
    // res.type('text/plain')
    // res.status(200)
    // res.send('Home Page')
    res.render('home')
})

app.get('/about', function (req, res) {
    // res.type('text/plain')
    // res.send('About Our Travel site')
    res.render('about')
})



// app.use()
/*
a method whereby express adds on the middle ware

*/


// 404 page catch all handler middleware
app.use(function (req, res,next) {
    // res.type('text/plain')
    res.status(404)
    // res.send('404 - Not Found ')
    res.render('notfound')
})

// 500 page
app.use(function(err, req, res, next){ console.error(err.stack);
    res.status(500);
    res.render('serverError');
});


app.listen(app.get('port'), function () {
    console.log('server up an running on port ' + app.get('port') )
})