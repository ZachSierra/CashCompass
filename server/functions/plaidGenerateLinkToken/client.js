const axios = require('axios');
require('dotenv').config();
const { ClientError } = require("./errors");

exports.plaidGenerateLinkToken = async (req) => {
    console.log("Entered client for plaidGenerateLinkToken");
    const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
    const PLAID_SECRET = process.env.PLAID_SECRET;
    const PLAID_ENV = 'sandbox';
    const url = `https://${PLAID_ENV}.plaid.com/link/token/create`;

    const requestBody = {
        clientId: PLAID_CLIENT_ID,
        secret: PLAID_SECRET,
        clientName: 'CashCompass',
        user: {
            client_user_id: req.body.uid
        },
        products: ['auth', 'transactions', 'balance_plus', 'income_verification'],
        country_codes: ['US'],
        language: 'en'
    };

    try {
        const plaidResponse = await axios.post(url, requestBody, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return plaidResponse.data;
    } catch (error) {
        console.error('Error generating Plaid link token: ', error);
        throw new ClientError("Error generating Plaid link token.");
    }
}