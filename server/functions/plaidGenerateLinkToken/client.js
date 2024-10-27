const axios = require('axios');
require('dotenv').config({ path: '../../.env' });
const { ClientError } = require("./errors");

exports.plaidGenerateLinkToken = async (req, uid) => {
    console.log("Entered client for plaidGenerateLinkToken");
    const plaidClientId = process.env.PLAID_CLIENT_ID;
    const plaidSecret = process.env.PLAID_SECRET;
    const plaidEnv = 'sandbox';
    const url = `https://${plaidEnv}.plaid.com/link/token/create`;

    const requestBody = {
        client_id: plaidClientId,
        secret: plaidSecret,
        client_name: 'CashCompass',
        user: {
            client_user_id: uid
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