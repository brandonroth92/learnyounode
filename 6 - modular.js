var myModule = require('./mymodule');
var directory = process.argv[2];
var extension = process.argv[3];

myModule(directory, extension, function (err, data) {
    if (err) 
        return console.error('Error: ' + err);
    
    data.forEach(function (file) {
        console.log(file);
    });
});

