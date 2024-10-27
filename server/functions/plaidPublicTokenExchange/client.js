const axios = require('axios');
require('dotenv').config();
const { ClientError } = require("./errors");

exports.plaidPublicTokenExchange = async (req) => {
    console.log("Entered client for plaidPublicTokenExchange");
    const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
    const PLAID_SECRET = process.env.PLAID_SECRET;
    const PLAID_ENV = 'sandbox';
    const url = `https://${PLAID_ENV}.plaid.com/item/public_token/exchange`;

    const requestBody = {
        client_id: PLAID_CLIENT_ID,
        secret: PLAID_SECRET,
        public_token: req.body.publicTokenExchange
    };

    try {
        const plaidResponse = await axios.post(url, requestBody, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return plaidResponse.data;
    } catch (error) {
        console.error('Error exchanging Plaid public token: ', error);
        throw new ClientError("Error exchanging Plaid public token.");
    }
}