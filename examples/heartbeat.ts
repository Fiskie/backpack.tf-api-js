const BackpackTF = require("../dist/commonjs/BackpackTF");

// Create a client with a deprecated automatic version
const client = new BackpackTF.Client({
    token: "token here",
    version: "0.0.1"
});

client.run(new BackpackTF.Automatic.Pulse()).then(function(response) {
    // "Automatic is currently disabled"
    console.log(response.data.message);

    // Create a client with a new automatic version
    const client2 = new BackpackTF.Client({
        token: "token here",
        version: "1.5.0"
    });

    client2.run(new BackpackTF.Automatic.Pulse()).then(function(response) {
        // A different failure
        console.log(response.data.message);
    });
});