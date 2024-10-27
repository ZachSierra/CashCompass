const handler = require("./handler");
const cors = require("cors")({origin: true});

exports.enter = async (req, res) => {
    cors(req, res, async () => {
        console.log("Entered entry for firestoreInsertTransaction");
        await handler.handle(req,res);
    })
}