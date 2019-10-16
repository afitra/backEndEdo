const Model = require('../models/event')
class eventController {
    static all(req, res) {
        Model.find({})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({
                    messege: err.message
                })
            })
    }

    static create(req, res) {
        console.log(req.body.time)
         Model.create({
                    title: req.body.title,
                    location: req.body.location,
                    participant: req.body.participant,
                    note: req.body.note,
                    date: req.body.date,
                    image: req.body.image,
                    time: req.body.time,
                    createdAt:  new Date()   
                })
         
            .then(data => {
                res.status(201).json(data)
                console.log(data);
            })
            .catch(err => {
                res.status(500).json({
                    messege: err.message
                })
            })
    }

    static edit(req,res){
        Model.findOneAndUpdate({
            _id:req.params.id
        },{
            title: req.body.title,
            location: req.body.location,
            participant: req.body.participant,
            note: req.body.note,
            date: req.body.date,
            image: req.body.image,
            time: req.body.time,
            updatedAt:  new Date()
        })
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        .catch(err => {
            res.status(500).json({
                messege: err.message
            })
        })
        

    }
    static remove(req, res) {
        Model.findByIdAndDelete(req.params.id)
            .then(function (data) {
                res.status(200).json(data)
                console.log(data);

            })
            .catch(function (err) {
                res.status(500).json({
                    messege: err.message
                })
            })
    }

}
module.exports = eventController