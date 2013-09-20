var omap = require("./index.js");

var incoming = {
    "Access Token": "12345qwerty"
}

var potential = {
    "token": [
        "access-token",
        "token",
        "token-access",
    ]
}

var outgoing = omap(incoming, potential);

console.log(outgoing);