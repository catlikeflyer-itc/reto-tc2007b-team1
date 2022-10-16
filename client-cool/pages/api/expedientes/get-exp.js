import clientPromise from "../../../lib/mongodb";
const EncryptRsa = require('encrypt-rsa').default;

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster0");
  pk = process.env.PRIVATE_KEY;
  const query = req.query;
  const { expedient } = query;

  switch (req.method) {
    case "GET":
      try {
        const myExp = await db
          .collection("expedientes")
          .findOne({ expediente: parseInt(expedient) });
        const Exp = nodeRSA.decryptStringWithRsaPrivateKey({ 
          text: myExp, 
          pk
        });
        if (myExp) {
          res.status(200).json(myExp);
        } else {
          res.status(404).json({ message: "Expediente not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Error finding expediente" });
      }
  }
}
