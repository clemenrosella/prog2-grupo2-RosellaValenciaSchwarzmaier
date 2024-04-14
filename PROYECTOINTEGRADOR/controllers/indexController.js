const moduloDatos = require('../db/index');

const indexController = {
    home: function (req, res) {
        res.render('index', {/*un objeto litera; con la info*/});
    }
};

module.exports = indexController;