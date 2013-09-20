var _ = require("underscore");
var helper = require("./helper.js");

module.exports = function(incomming, potential){
    var outgoing = {};
    _.each(potential, function(potential_keys, key){
        var forsight = helper.potential_value(incomming, potential_keys);
        if(forsight) outgoing[key] = forsight;
    });
    return outgoing;
}