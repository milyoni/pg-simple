var pg = require('pg');

var defaults = {
  database_url: ""
};
module.exports.defaults = defaults

module.exports.query = function() {
  var args = arguments;
  pg.connect(defaults.database_url, function(error, client) {
    client.query.apply(client, args);
  });
};
