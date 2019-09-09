var db = require("../models");

module.exports = function(app) {

    app.post("/api/add", function (req, res) {
        db.Burgers.create(req.body).then(function(burgers) {
            res.json(burgers);
        });
    });

    app.post("/api/eat/:title", function (req, res) {
        let title = req.params.title;
        db.Burgers.update(
            {eaten: 1},
            {where: { title: title }
        }).then(function(burgers) {
            res.json(burgers);
        });
    });

};
