const Vacation = require("../models/vacation.model");


class VacationController {

  getAll(req, res){
    console.log("3", "in the controller now!");
    Vacation.find({}).sort("start").exec()
      .then(vacations => {
        console.log("4", "our vacations are", vacations);
        res.json(vacations)
      })
      .catch(err => res.json(err));
  }

  create(req, res){
    const newVacation = new Vacation(req.body);
    newVacation.save()
      .then( () => res.json({msg: "vacation approved"}))
      .catch(err => res.json(err));
  }

  addActivity(req, res){
    Vacation.findOneAndUpdate({_id: req.params._id}, { $push: {activities: req.body.activity} })
      .then(() => res.json({msg: "activity planned"}))
      .catch(err => res.json(err));
  }

  removeActivity(req, res){
    Vacation.findOneAndUpdate({_id: req.params._id}, { $pull: {activities: req.body.activity} })
      .then(() => res.json({msg: "activity removed"}))
      .catch(err => res.json(err));
  }

}

module.exports = new VacationController();