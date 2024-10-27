const { ClientError } = require("./errors");
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.firestoreInsertUser = async (req) => {
    console.log("Entered client for firestoreInsertUser")
    try {
        const result = await db.collection('users').add({
            uid: req.body.uid,
            email: req.body.email,
            fbIdToken: req.body.fbIdToken,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            plaidAccessToken: req.body.plaidAccessToken,
            username: req.body.username
        });
        console.log(`Document added with UID: ${req.body.uid}`);
        return result;
    } catch (error) {
        console.error('Error in firestoreInsertUser client layer: ', error);
        throw new ClientError('Error adding document to Firestore');
    }
}