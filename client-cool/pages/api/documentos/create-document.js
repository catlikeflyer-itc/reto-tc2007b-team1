import clientPromise from "../../../lib/mongodb";
const EncryptRsa = require('encrypt-rsa').default;

export default async function handler(req, res) {
const encryptRsa = new EncryptRsa();
  const client = await clientPromise;
  const db = client.db("Cluster0");
  pk = process.env.PUBLIC_KEY;
  switch (req.method) {
    case "POST":
      try {
        let bodyObject = JSON.parse(req.body);
        const encryptedText = encryptRsa.encryptStringWithRsaPublicKey({ 
          text: bodyObject,   
          pk,
        });
        let myDoc = await db.collection("documentos").insertOne(encryptedText);
        res.status(200).json(bodyObject);
      } catch (error) {
        res.status(500).json({ message: "Error inserting documento" });
      }
  }
}
