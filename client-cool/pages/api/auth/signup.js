import clientPromise from "../../../lib/mongodb";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster0");

  switch (req.method) {
    case "POST":
      

      try {
        let bodyObject = JSON.parse(req.body);
        let myUser = await db.collection("users").insertOne(bodyObject);
        res.status(200).json(bodyObject);
      } catch (error) {
        res.status(500).json({ message: "Error inserting user" });
      }
  }
}
