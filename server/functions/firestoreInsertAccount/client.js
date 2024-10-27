const { ClientError } = require("./errors");
const admin = require('firebase-admin');
require('dotenv').config();
if (!admin.apps.length) {
    admin.initializeApp({
        databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
    });
}
const db = admin.firestore();

exports.firestoreInsertAccount = async (req) => {
    console.log("Entered client for firestoreInsertAccount");
    try {
        const result = await db.collection('accounts').add({
            "accountType": req.body.accountType,
            "balance": req.body.balance,
            "bankName": req.body.bankName,
            "currency": req.body.currency,
            "uid": req.body.uid
        })
        return result;
    } catch (error) {
        console.error('Error in firestoreInsertAccount client layer: ', error);
        throw new ClientError('Error adding document to Firestore for accounts collection');
    }
}