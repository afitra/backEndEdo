const router = require('express').Router();
let Exercise = require('../models/event-model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    // const username = req.body.username;
    // const description = req.body.description;
    // const duration = Number(req.body.duration);
    // const date = Date.parse(req.body.date);
    const { eventName, participant, location, date, timeStart, timeEnd, note } = req.body
    const newExercise = {
        eventName, participant, location, date, timeStart, timeEnd, note, createdAt: new Date()
    };
    // console.log(newExercise)
    console.log(newExercise)
    Exercise.create(newExercise)
        .then(data => {
            res.status(201).json(data)
            console.log(data);
        })
        .catch(err => {
            res.status(500).json({
                messege: err.message
            })
        })
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    const { eventName, participant, location, date, timeStart, timeEnd, note } = req.body

    const newExercise = {
        eventName, participant, location, date, timeStart, timeEnd, note, updatedAt: new Date()
    };
    Exercise.findOneAndUpdate({
        _id: req.params.id
    }, newExercise)
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        .catch(err => {
            res.status(500).json({
                messege: err.message
            })
        })

});


module.exports = router;