const Vacations = require("../controllers/vacation.controller");

function ShowMessage(req, res, next) {
    console.log("2", req.url);
    next();
}   


module.exports = app => {
    app.get("/api/vacations", ShowMessage, Vacations.getAll);
    app.post("/api/vacations", Vacations.create);
    app.post("/api/vacations/:_id/plan_activity", Vacations.addActivity);
    app.post("/api/vacations/:_id/remove_activity", Vacations.removeActivity);
}
