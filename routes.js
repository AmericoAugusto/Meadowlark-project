const main = require('./handlers/main')

module.exports = function(app) {
    app.get('/', main.home)
    app.get('/about', main.about)
}
module.exports = app => {
    app.get("/", (req, res) => res.render("home")); // get para adicionar rota. A função que eu forneci será chamada quando a rota for acionada
    app.get('/set-currency/:currency', handlers.setCurrency);
    // fetch/JSON formulário
    app.get("/newsletter", handlers.newsletter);
    app.get("/about", (req, res) => {
        res.render("about", { fortune: fortune.getFortune() });
      });
}
