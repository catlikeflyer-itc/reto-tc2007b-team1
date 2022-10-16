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
      const { email, password } = query;
      try {
        const myUser = await db
          .collection("users")
          .findOne({ email, pass: password });
        const User = nodeRSA.decryptStringWithRsaPrivateKey({ 
          text: myUser, 
          pk
        });
        if (myUser) {
          res.status(200).json(myUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Error inserting user" });
      }
  }
}
