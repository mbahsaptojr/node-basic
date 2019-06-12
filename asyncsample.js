var asyncs = require("async");

function myFirstFunction(callback) {
    callback(null, 10);
}

function builtPlumbing(param, callback) {
    var result = param * 1.1;

    setTimeout(function () {
        console.log("manager builtPlumbing (order 1) make decicion in 2000ms then go ahead")
    }, 2000)

    callback(null, result)
}

function builtFoundation(param, callback) {
    result = param * 1;

    setTimeout(function () {
        
        console.log("manager builtFoundation (order 2) make decicion in 5000ms then no go " + result)
    }, 5000)

    callback(null, result)
}



asyncs.waterfall([
    myFirstFunction,
    builtPlumbing,
    builtFoundation
], function (err, result) {
    // result now equals 'Task1 and Task2 completed'
    console.log(result);
});