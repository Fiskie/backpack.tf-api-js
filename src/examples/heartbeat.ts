import {Client} from "../Client";
import {Pulse} from "../Commands/Automatic/Pulse";

// Create a client with a deprecated automatic version
const client = new Client({
    token: "token here",
    version: "0.0.1"
});

client.run(new Pulse("steamid")).then(async function(response) {
    // "Automatic is currently disabled"
    console.log(response.data.message);

    // Create a client with a new automatic version
    const client2 = new Client({
        token: "token here",
        version: "1.5.0"
    });

    // ES6 await
    const response2 = await client2.run(new Pulse("steamid"));

    // A different failure
    console.log(response2.data.message);
});