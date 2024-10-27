const service = require("./service");
const { ClientError, ServiceError } = require('./errors');

exports.handle = async (req, res) => {
    console.log("Entered handler for firestoreInsertTransaction");
    const { acctId, amount, category, currency, merchant, uid } = req.body;
    if (!acctId || !amount || !category || !currency || !merchant || !uid) {
        throw new ClientError('Missing required fields');
    }
    try {
        const result = await service.invokeClient(req);
        return res.status(201).send(result);
    } catch (error) {
        if(error instanceof ClientError) return res.status(500).send(error.message);
        else if (error instanceof ServiceError) return res.status(500).send(error.message);
        else {
            error.message = "Unidentifed server error";
            return res.status(500).send(error.message);
        }
    }
}