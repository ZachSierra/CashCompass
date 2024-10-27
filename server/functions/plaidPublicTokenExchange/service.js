const client = require("./client");
const { ServiceError } = require("./errors");

exports.invokeClient = async (req) => {
    console.log("Entered service for plaidPublicTokenExchange");
    try {
        const result = await client.plaidPublicTokenExchange(req);
        return result;
    } catch (error) {
        console.error(`Error in service layer: ${error.message}`);
        throw new ServiceError('Error in service layer.');
    }
}