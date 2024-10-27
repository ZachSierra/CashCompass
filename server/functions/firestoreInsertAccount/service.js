const client = require("./client");
const { ServiceError } = require("./errors");

exports.invokeClient = async (req) => {
    console.log("Entered service for firestoreInsertAccount");
    try {
        const result = await client.firestoreInsertAccount(req);
        return result;
    } catch (error) {
        console.error("Error in service layer: ", error);
        throw new ServiceError("Error in service layer.");
    }
}