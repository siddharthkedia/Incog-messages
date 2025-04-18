const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const fs = require("fs");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;
// Initialize Firestore
var serviceAccount
if(PORT == 8000){
    serviceAccount = JSON.parse(fs.readFileSync("Users/siddharthkedia/Documents/serviceAccountKey.json", "utf8"));
}
else{
    serviceAccount = {
        type: "service_account",
        project_id: process.env.project_id,
        private_key_id: process.env.private_key_id,
        private_key: process.env.private_key.replace(/\\n/g, '\n'), // Fix newlines
        client_email: process.env.client_email,
        client_id: process.env.client_id,
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: process.env.client_x509_cert_url
      };
}
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
}); 

const db = admin.firestore();

// ✅ POST route: Create a message
app.post("/create", async (req, res) => {
    try {
      const { message, expireInMinutes } = req.body;
      console.log("Received message:", req.body);

      if (!message || !expireInMinutes) {
        return res.status(400).json({ error: "Message and expiry time required" });
      }
  
      const docRef = await db.collection("messages").add({
        message,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        expireAt: Date.now() + expireInMinutes * 60 * 1000,
      });
  
      res.json({ message: "Message stored", id: docRef.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // GET: Read & delete message
  app.get("/read/:id", async (req, res) => {
    try {
      const docRef = db.collection("messages").doc(req.params.id);
      const doc = await docRef.get();
  
      if (!doc.exists) {
        return res.status(404).json({ error: "Message not found or expired" });
      }
  
      const data = doc.data();
      if (Date.now() > data.expireAt) {
        await docRef.delete(); // Auto-delete expired message
        return res.status(410).json({ error: "Message expired" });
      }
  
      await docRef.delete(); // Delete after reading
      res.json({ message: data.message });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app.get("/test", (req, res) => {
    console.log("GET /test route was hit");
    res.json({ message: "Test route is working!" });
  });
  

  
  // Start server
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
  });
  