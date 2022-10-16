import clientPromise from "../../../lib/mongodb";
const EncryptRsa = require('encrypt-rsa').default;

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster0");
  pk = process.env.PRIVATE_KEY;

  switch (req.method) {
    case "GET":
      try {
        const myExpedientes = await db
          .collection("expedientes")
          .find({})
          .toArray();
        const Expedientes = nodeRSA.decryptStringWithRsaPrivateKey({ 
          text: myExpedientes, 
          pk
        });
        res.status(200).json(myExpedientes);
      } catch (error) {
        res.status(500).json({ message: "Error getting expedientes" });
      }
  }
}
