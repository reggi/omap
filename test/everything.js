var expect = require("expect.js");
var helper = require("../helper.js");
var mapper = require("../index.js");
var assert = require('assert');

describe('object_mapper helpers', function(){
    it("should inflate array", function(){
        var input = helper.inflate(["hello-world"]);
        var output = [ 'helloworld', 'hello_world', 'hello world', 'hello-world' ];
        output.sort();
        expect(input).to.eql(output);
    });
    it("should lowercase array", function(){
        var input = helper.lowercase_array(["HELLO","WORLD"]);
        var output = ["hello","world"];
        expect(input).to.eql(output);
    });
    it("should provied the potential value", function(){
        var incoming = {"token": "12345qwerty"};
        var input = helper.potential_value(incoming,["token"]);
        var output = incoming.token;
        expect(input).to.eql(output);
        var input = helper.potential_value(incoming,["token","access_token"]);
        var output = incoming.token;
        expect(input).to.eql(output);
        var input = helper.potential_value(incoming,["access_token","token"]);
        var output = incoming.token;
        expect(input).to.eql(output);
        var input = helper.potential_value(incoming,["access_token"]);
        var output = incoming.token;
        expect(input).not.be.eql(output);
    });
    it("should map incoming object to potential", function(){
        var potential = {
            "token": [
                "access-token",
                "token",
                "token-access",
            ]
        }
        var incoming = {
            "Access Token": "12345qwerty"
        }
        var input = mapper(incoming, potential);
        var output = {
            "token": "12345qwerty"
        }
        expect(input).be.eql(output);
    });
});