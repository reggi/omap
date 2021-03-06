var _ = require("underscore");

var helper = {};

helper.inflate = function(array){    
    var inflated_array = [];
    _.each(array, function(param){
        if(param.match(/\-/)){
            inflated_array.push(param.replace("-",""));
            inflated_array.push(param.replace("-","_"));
            inflated_array.push(param.replace("-"," "));
        }else if(param.match(/\s/)){
            inflated_array.push(param.replace(" ",""));
            inflated_array.push(param.replace(" ","_"));
            inflated_array.push(param.replace(" ","-"));
        }else if(param.match(/_/)){
            inflated_array.push(param.replace("_",""));
            inflated_array.push(param.replace("_"," "));
            inflated_array.push(param.replace("_","-"));
        }
        inflated_array.push(param);
    });
    inflated_array.sort();
    return inflated_array;
}

helper.lowercase_array = function(array){
    var lowercase = [];
    _.each(array, function(value){
        lowercase.push(value.toLowerCase());
    });
    return lowercase;
}

helper.potential_value = function(incoming, potential_keys){
    var keys = _.keys(incoming);
    var lowercase_keys = helper.lowercase_array(keys);
    var given_case_reference = _.object(lowercase_keys, keys);
    var inflated_potential_keys = helper.inflate(potential_keys);
    var intersection = _.intersection(lowercase_keys, inflated_potential_keys);
    var value = (intersection.length > 0) ? incoming[given_case_reference[intersection[0]]] : false;
    return value;
};

module.exports = helper;