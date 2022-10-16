import clientPromise from "../../../lib/mongodb";
import { getSession } from "../../../lib/get-session";
const EncryptRsa = require('encrypt-rsa').default;

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster0");
  pk = process.env.PRIVATE_KEY;

  switch (req.method) {
    case "GET":
      const query = req.query;
      const { expedient } = query;
      try {
        if (expedient) {
          const myExp = await db
            .collection("documentos")
            .find({ expediente: expedient })
            .toArray();
          const Exp = nodeRSA.decryptStringWithRsaPrivateKey({ 
            text: myExp, 
            pk
          });
          if (myExp) {
            res.status(200).json(myExp);
          } else {
            res.status(404).json({ message: "Docs not found" });
          }
        } else {
          const myDocs = await db.collection("documentos").find({}).toArray();
          res.status(200).json(myDocs);
        }
      } catch (error) {
        res.status(500).json({ message: "Error inserting doc" });
      }
  }
}
