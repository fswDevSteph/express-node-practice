//? 1: Import the express module
const express = require('express')

//? 2. Creates an express application
const app = express()
app.set('view engine', 'ejs')

//! 4. BREAD AND BUTTER - Create routes for the app; RESTful APIs. Standard HTTP request/respond methods
//? Request data from the server
app.get('/', (req, res) => {
    console.log('Here')
    // res.sendStatus(200) can not be chained but .status can
    res.status(200).send('This is the response being sent to the user.')
    res.render('index')
});

//? Post/Send/Submit data to the server. 
// app.post()

// //? Used for updating or replacing an entire resource on the server.
// app.put()

// //? Used to apply partial modifications to a resource. 
// app.patch()


// app.delete()

//? 3. Tell the app to listen on port 3001
app.listen(3001);