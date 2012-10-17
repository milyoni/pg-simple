pg-simple
=========

A simple query api for the node.js pg library.

# Usage

    require("pg-simple").defaults.database_url = "postgres://postgres:@localhost:5432/your-db";

    require("pg-simple").query("select * from users where id = $1", [42], function(error, results) {
      if (error) throw "An Error Occurred";
      console.info(results.rows);
    });
