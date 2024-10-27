const { ClientError, ServiceError } = require('./errors');
const service = require("./service")

exports.handle = async (req, res) => {
    console.log("Entered handler for firestoreInsertAccount");
    const { accountType, uid, balance, bankName, currency } = req.body;
    if (!accountType || !uid || !balance || !bankName || !currency) {
        console.error('Missing required fields');
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