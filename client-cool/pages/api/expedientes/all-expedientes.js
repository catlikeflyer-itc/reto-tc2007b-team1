import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster0");

  switch (req.method) {
    case "GET":
      try {
        const myExpedientes = await db
          .collection("expedientes")
          .find({})
          .toArray();
        res.status(200).json(myExpedientes);
      } catch (error) {
        res.status(500).json({ message: "Error getting expedientes" });
      }
  }
}
