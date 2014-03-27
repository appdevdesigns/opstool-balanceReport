
var path = require('path');
var fs = require('fs');

var AD = require('ad-utils');



(function() {

    //
    var localOptions = {};

    if (fs.existsSync('./options.js')) {
        localOptions = require('./options.js');
    }

    AD.module.setup(localOptions);

})();


