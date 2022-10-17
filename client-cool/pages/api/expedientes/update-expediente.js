import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster0");
  const query = req.query;
  const { expedient } = query;

  switch (req.method) {
    case "PUT":
      try {
        let myExpedient = await db
          .collection("expedientes")
          .update(
            { expediente: parseInt(expedient) },
            { $set: { status: "Finalizado" } }
          );
        res.status(200).json(myExpedient);
      } catch (error) {
        res.status(500).json({ message: "Error updating status" });
      }
  }
}
