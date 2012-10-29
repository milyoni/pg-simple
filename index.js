var pg = require('pg');

var defaults = {
  database_url: ""
};

var exports = exports;
exports.defaults = defaults

exports.query = function() {
  var args = arguments;
  pg.connect(defaults.database_url, function(error, client) {
    client.query.apply(client, args);
  });
};

exports.tableBy = function(table, field, values, callback) {
  if (!values || !values.length) {
    setTimeout(function() {
      callback(null, []);
    }, 0);
  } else {
    exports.query(tableBySql(table, field, values), values, function(error, results) {
      callback(error, results);
    });
  }
};

exports.tableByIds = function(table, ids, callback) {
  exports.tableBy(table, "id", ids, callback);
};

var tableBySql = function(table, field, values) {
  var params = [];
  for (var i=1; i <= values.length; ++i) {
    params.push("$" + i);
  };
  return "select * from " + table + " where " + field + " in ($$)".replace("$$", params.join(","));
};
