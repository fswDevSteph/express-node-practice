//? 1: Import the express module
const express = require('express');
//? 2. Creates an express application
const app = express();
//? adding ejs as view engine
app.set('view engine', 'ejs')
//?//? middleware function that logs out the request url
app.use(logger)
//?
app.use(express.static('public'));
//? 5. Import the userRouter
const userRouter = require('./routes/users');

//! 4. BREAD AND BUTTER - Create routes for the app; RESTful APIs. Standard HTTP request/respond methods
//? Request data from the server
app.get('/', (req, res) => {
    console.log('Here')
    // res.sendStatus(200) can not be chained but .status can
    //res.status(200).send('This is the response being sent to the user.')
    res.render('index', { text: "This is text in the server.js file that is going to show up on the browser but I'm only going to type <%= text %> in my index.ejs file to display it  - cool!" })
});

//? Post/Send/Submit data to the server. 
// app.post()

//? Used for updating or replacing an entire resource on the server.
// app.put()

//? Used to apply partial modifications to a resource. 
// app.patch()

//? Used to delete resources
// app.delete()

//! tells server, anything that starts with /users, add all the routes in userRouter to it
app.use('/users', userRouter)

//? Logging out something function
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

//? 3. Tell the app to listen on port 3001
app.listen(3001);