const orm = require('../config/orm');

const menu = {
    all: function(cb) {
        orm.selectAll("burger_menu", function(res) {
            cb(res);
        })
    }
}

module.exports = menu;