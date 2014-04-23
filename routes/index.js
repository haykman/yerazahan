var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});

router.get('/test', function(req, res) {
    var db = req.db;
    var collection = db.get('test');
    collection.find({}, {}, function(e, docs) {
        res.render('test', {
            "test" : docs
        });
    });
});

/* GET New test. */
router.get('/newtest', function(req, res) {
    res.render('newtest', { title: 'Add New Test' });
});

/* POST to Add Test Service */
router.post('/addtest', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var testName = req.body.testname;
    var testValue = req.body.testvalue;

    // Set our collection
    var collection = db.get('test');

    // Submit to the DB
    collection.insert({
        "a" : testName,
        "b" : testValue
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("test");
            // And forward to success page
            res.redirect("test");
        }
    });
});

router.get('/about', function(req, res) {;
    res.render('about');
});

router.get('/contacts', function(req, res) {;
    res.render('contacts');
});

router.get('/home', function(req, res) {;
    res.render('home');
});

router.get('/404', function(req, res) {;
    res.render('404');
});

module.exports = router;
