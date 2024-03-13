const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.send('User New Form')
})

router.post('/', (req, res) => {

})

//?_____________________________________________________________
//! chain together all get put delete routes
router.route('/:id').get((req, res) => {
    console.log(req.user)
    res.send(`Get user with ID ${req.params.id}`)
}).put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`)
}).delete((req, res) => {
    req.params.id
    res.send(`Delete user with ID ${req.params.id}`)
})
//? --------------------------------------------------------------------
//! original RESTful API routes below:
// router
//     .route('/:id')
//     .get('/:id', (req, res) => {
//         req.params.id
//         res.send('User Get with ID ${req.params.id}')
//     })

// router.put('/:id', (req, res) => {
//     req.params.id
//     res.send('Update User with ID ${req.params.id}')
// })

// router.delete('/:id', (req, res) => {
//     req.params.id
//     res.send('Delete Get with ID ${req.params.id}')
// })
//?router.param says, hey whenevr you see a param that matches what i passed in, in this case, 'ID' I want you to run this code with the request, response next and id.

const users = [{ name: 'Steph' }, { name: 'Sam' }, { name: 'SamX2?' }, { name: 'Saurahb' }, { name: 'Daniel' }]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router