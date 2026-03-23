const admin = require('firebase-admin')
const serviceAccount = require(process.env.KEY_ACCOUNT)

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    firebaseConfig
})

const db = admin.firestore()
module.exports = db