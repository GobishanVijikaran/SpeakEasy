var async = require('async');
var fs = require('fs');
var pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



// Connect to the "bank" database.
var config = {
    user: 'maxroach',
    host: 'localhost',
    database: 'defaultdb',
    port: 26257,
    ssl: {
        ca: fs.readFileSync('certs/ca.crt')
            .toString(),
        key: fs.readFileSync('certs/client.maxroach.key')
            .toString(),
        cert: fs.readFileSync('certs/client.maxroach.crt')
            .toString()
    }
};

app.route('/seniors')
.get(function(req, res) {
  var pool = new pg.Pool(config);

  pool.connect(function (err, client, done) {

      // Close communication with the database and exit.
      var finish = function () {
          done();
      };

      if (err) {
          console.error('could not connect to cockroachdb', err);
          finish();
      }
      async.waterfall([
              function (next) {
                  // Create the 'accounts' table.
                  client.query('', next);
              },
              function (results, next) {
                  // Insert two rows into the 'accounts' table.
                  client.query('', next);
              },
              function (results, next) {
                  // Print out account balances.
                  client.query('SELECT * FROM seniors;', next);
              },
          ],
          function (err, results) {
              if (err) {
                  console.error('Error inserting into and selecting from accounts: ', err);
                  finish();
              }

              console.log(results.rows);
              res.send(results.rows)

              finish();
          });
  });
})

app.route('/history')
.get(function(req, res) {
  var pool = new pg.Pool(config);

  pool.connect(function (err, client, done) {

      // Close communication with the database and exit.
      var finish = function () {
          done();
      };

      if (err) {
          console.error('could not connect to cockroachdb', err);
          finish();
      }
      async.waterfall([
              function (next) {
                  // Create the 'accounts' table.
                  client.query('', next);
              },
              function (results, next) {
                  // Insert two rows into the 'accounts' table.
                  client.query('', next);
              },
              function (results, next) {
                  // Print out account balances.
                  client.query('SELECT * FROM history;', next);
              },
          ],
          function (err, results) {
              if (err) {
                  console.error('Error inserting into and selecting from accounts: ', err);
                  finish();
              }

              console.log(results.rows);
              res.send(results.rows)

              finish();
          });
  });
})

app.route('/callers')
.get(function(req, res) {
  var pool = new pg.Pool(config);

  pool.connect(function (err, client, done) {

      // Close communication with the database and exit.
      var finish = function () {
          done();
      };

      if (err) {
          console.error('could not connect to cockroachdb', err);
          finish();
      }
      async.waterfall([
              function (next) {
                  // Create the 'accounts' table.
                  client.query('', next);
              },
              function (results, next) {
                  // Insert two rows into the 'accounts' table.
                  client.query('', next);
              },
              function (results, next) {
                  // Print out account balances.
                  client.query('SELECT * FROM callers;', next);
              },
          ],
          function (err, results) {
              if (err) {
                  console.error('Error inserting into and selecting from accounts: ', err);
                  finish();
              }

              console.log(results.rows);
              res.send(results.rows)

              finish();
          });
  });
})

app.route('/callers')
.post(function(req, res) {
  console.log(req.body);
  const fname = req.body.fname
  const lname = req.body.lname
  const age = req.body.age
  const interests = req.body.interests
  const email = req.body.email
  const location = req.body.location

  var pool = new pg.Pool(config);

  pool.connect(function (err, client, done) {

      // Close communication with the database and exit.
      var finish = function () {
          done();
      };

      if (err) {
          console.error('could not connect to cockroachdb', err);
          finish();
      }
      async.waterfall([
              function (next) {
                  // Create the 'accounts' table.
                  client.query('', next);
              },
              function (results, next) {
                  // Insert two rows into the 'accounts' table.
                  client.query(`INSERT INTO callers (fname, lname, age, interests, email, location) VALUES ('${fname}', '${lname}', '${age}', '${interests}', '${email}', '${location}');`, next);
              },
              function (results, next) {
                  // Print out account balances.
                  client.query('SELECT * FROM callers;', next);
              },
          ],
          function (err, results) {
              if (err) {
                  console.error('Error inserting into and selecting from accounts: ', err);
                  finish();
              }

              console.log(results.rows);
              res.send(results.rows)

              finish();
          });
  });
})

app.route('/seniors')
.post(function(req, res) {
  console.log(req.body);
  const fname = req.body.fname
  const lname = req.body.lname
  const age = req.body.age
  const interests = req.body.interests
  const email = req.body.email
  const location = req.body.location

  var pool = new pg.Pool(config);

  pool.connect(function (err, client, done) {

      // Close communication with the database and exit.
      var finish = function () {
          done();
      };

      if (err) {
          console.error('could not connect to cockroachdb', err);
          finish();
      }
      async.waterfall([
              function (next) {
                  // Create the 'accounts' table.
                  client.query('', next);
              },
              function (results, next) {
                  // Insert two rows into the 'accounts' table.
                  client.query(`INSERT INTO seniors (fname, lname, age, interests, email, location) VALUES ('${fname}', '${lname}', '${age}', '${interests}', '${email}', '${location}');`, next);
              },
              function (results, next) {
                  // Print out account balances.
                  client.query('SELECT * FROM seniors;', next);
              },
          ],
          function (err, results) {
              if (err) {
                  console.error('Error inserting into and selecting from accounts: ', err);
                  finish();
              }

              console.log(results.rows);
              res.send(results.rows)

              finish();
          });
  });
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
})
