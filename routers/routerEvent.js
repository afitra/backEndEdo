const router = require('express').Router(),
    eventController = require('../controllers/eventController')


    router.get('/all', eventController.all)
    router.post('/create', eventController.create)
    router.put('/edit/:id', eventController.edit)
    router.delete('/delete/:id', eventController.remove)
 

module.exports = router