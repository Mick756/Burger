let db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burgers.findAll({}).then(function(burgers) {
      res.render("index", {
        burgers: burgers
      });
    });
  });

  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
