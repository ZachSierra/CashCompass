const { ClientError } = require("./errors");
const admin = require('firebase-admin');
require('dotenv').config();
if (!admin.apps.length) {
    admin.initializeApp({
        databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
    });
}
const db = admin.firestore();

exports.firestoreInsertTransaction = async (req) => {
    console.log("Entered client for firestoreInsertTransaction");
    try {
        const result = await db.collection('transactions').add({
            acctId: req.body.acctId,
            amount: req.body.amount,
            category: req.body.category,
            currency: req.body.currency,
            merchant: req.body.merchant,
            uid: req.body.uid
        });
        console.log(`Document added with UID: ${req.body.uid}`);
        return result;
    } catch (error) {
        console.error('Error in firestoreInsertTransaction client layer: ', error);
        throw new ClientError('Error adding document to Firestore');
    }
}