const { ClientError } = require("./errors");
const admin = require('firebase-admin');
require('dotenv').config();
if (!admin.apps.length) {
    admin.initializeApp({
        databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
    });
}
const db = admin.firestore();

exports.firestoreInsertBudget = async (req) => {
    console.log("Entered client for firestoreInsertBudget");
    const { budgetAmount, uid, month, categories } = req.body;
    for (const category in categories) {
        if (categories.hasOwnProperty(category)) {
            categories[category].allocated = categories[category].allocated ?? null;
            categories[category].spent = categories[category].spent ?? null;
        }
    }
    try {
        const result = await db.collection('budgets').add({
            budgetAmount,
            uid,
            month,
            categories
        })
        return result;
    } catch (error) {
        console.error('Error in firestoreInsertBudget client layer: ', error);
        throw new ClientError('Error adding document to Firestore for budgets collection');
    }
}