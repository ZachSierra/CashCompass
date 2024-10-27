const handler = require("./handler");
const cors = require("cors")({origin: true});

exports.enter = (req, res) => {
    cors(req, res, async () => {
        console.log("Entered entry for plaidGenerateLinkToken");
        await handler.handle(req, res);
    })
}