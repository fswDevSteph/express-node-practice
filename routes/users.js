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
    res.send('User Get with ID ${req.params.id}')
}).put((req, res) => {
    res.send('Update User with ID ${req.params.id}')
}).delete((req, res) => {
    req.params.id
    res.send('Delete Get with ID ${req.params.id}')
})
//? --------------------------------------------------------------------
//! original RESTful API routes below:
router
    .route('/:id')
    .get('/:id', (req, res) => {
        req.params.id
        res.send('User Get with ID ${req.params.id}')
    })

router.put('/:id', (req, res) => {
    req.params.id
    res.send('Update User with ID ${req.params.id}')
})

router.delete('/:id', (req, res) => {
    req.params.id
    res.send('Delete Get with ID ${req.params.id}')
})

module.exports = router