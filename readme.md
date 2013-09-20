# OMAP (ObjectMap)

> Maps object key to array of possible keys.

`npm install omap --save`

## Example

```
var omap = require("omap");

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

// { token: '12345qwerty' }

```