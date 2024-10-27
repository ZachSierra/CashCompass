const client = require("./client");
const { ServiceError } = require("./errors");

exports.invokeClient = async (req) => {
    console.log("Entered service for firestoreInsertUser");
    try {   
        const result = await client.firestoreInsertUser(req);
        return result;
    } catch (error) {
        console.error('Error in service layer: ', error);
        throw new ServiceError('Error in service layer.');
    }
}