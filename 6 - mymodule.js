var path = require('path');
var fs = require('fs');

module.exports = function (directory, extension, callback) {
    var ext = '.' + extension,
        filesArray = [];
    
    fs.readdir(directory, function(err, files) {
        if (err) 
            return callback(err);
    
        files.forEach(function (file) {
            if (path.extname(file) === ext) {
                filesArray.push(file);
            }
        });
        callback(null, filesArray);
    });
};
