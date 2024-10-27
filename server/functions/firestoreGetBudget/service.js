const client = require("./client");
const { ServiceError } = require("./errors");

exports.invokeClient = async (req) => {
    console.log("Entered service for firestoreGetBudget");
    try {
        const result = await client.firestoreGetBudget(req);
        return result;
    } catch {
        console.error("Error in service layer: ", error);
        throw new ServiceError("Error in service layer.");
    }
}