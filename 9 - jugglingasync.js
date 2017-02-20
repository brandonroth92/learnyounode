var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function logResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}

function httpget(index) {
    http.get(process.argv[2 + index], function(response) {
        response.pipe(bl(function(err, data) {
            if (err)
                return console.error(err);
            results[index] = data.toString();
            count++;
            
        if (count === 3) 
            logResults();
        }));
    });
}

for (var i = 0; i < 3; i++) {
    httpget(i);
}