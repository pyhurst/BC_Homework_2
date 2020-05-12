const db = require("../models");

module.exports = function(app) {
    app.post("/api/contact", function(req, res) {
        // console.log(req.body)
        db.Contact.create({
            firstName: req.body.firstName
        }).then(function(data) {
            res.json(data);
        });
    });
};