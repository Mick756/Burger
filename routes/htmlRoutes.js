let db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burgers.findAll({}).then(function(burgers) {
      let eaten = [];
      let not_eaten = [];
      for (let i = 0; i < burgers.length; i++) {
        if (burgers[i].eaten == 1) {
            eaten.push(burgers[i]);
        } else {
            not_eaten.push(burgers[i]);
        }
      }
      res.render("index", {
        eaten: eaten,
        not_eaten: not_eaten
      });
    });
  });

  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
