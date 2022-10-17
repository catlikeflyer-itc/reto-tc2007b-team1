import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster0");

  switch (req.method) {
    case "PUT":
      try {
        let bodyObject = JSON.parse(req.body);
        let myExpedient = await db
          .collection("expedientes")
          .updateOne(
            { _id: bodyObject._id },
            { $set: { status: "Finalizado" } },
            { upsert: false }
          );
        res.status(200).json(myExpedient);
      } catch (error) {
        res.status(500).json({ message: "Error updating status" });
      }
  }
}
