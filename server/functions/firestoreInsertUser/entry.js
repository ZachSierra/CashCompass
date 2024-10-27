const handler = require("./handler");
const cors = require("cors")({origin: true});

exports.enter = (req, res) => {
    cors(req, res, async () => {
        console.log("Entered entry for firestoreInsertUser");
        await handler.handle(req, res);
    })
}