const service = require("./service");
const { ClientError, ServiceError } = require('./errors');
const { getAuth } = require("firebase-admin/auth");

exports.handle = async (req, res) => {
    console.log("Entered handler for plaidPublicTokenExchange");
    try {
        const decodedToken = await getAuth().verifyIdToken(req.body.idToken);
        const uid = decodedToken.uid;
        console.log("Token verified, UID: ", uid);
        const result = service.invokeClient(req);
        return res.status(200).send(result);
    } catch (error) {
        if(error instanceof ClientError) return res.status(500).send(error.message);
        else if(error instanceof ServiceError) return res.status(500).send(error.message);
        else {
            error.message = "Unidentified server error";
            return res.status(500).send(error.message);
        }
    }
}