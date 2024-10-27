const service = require("./service")

exports.handle = async (req, res) => {
    console.log("Entered handler for firestoreGetBudget");
    if(!uid) {
        console.error("Missing UID for firestoreGetBudget");
        throw new Error("Missing UID for firestoreGetBudget");
    }
    try {
        const result = await service.invokeClient(req);
        return result;
    } catch (error) {
        if(error instanceof ClientError) return res.status(500).send(error.message);
        else if (error instanceof ServiceError) return res.status(500).send(error.message);
        else {
            error.message = "Unidentifed server error";
            return res.status(500).send(error.message);
        }
    }
}