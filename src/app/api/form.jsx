import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password, feedback } = req.body; // Extrae todos los campos

    try {
      const client = await clientPromise;
      const db = client.db("NebulaDrift"); // Reemplaza con tu nombre de base de datos

      const response = await db.collection("usuarios").insertOne({
        name,
        email,
        password, // Asegúrate de que estás gestionando la seguridad de las contraseñas adecuadamente
        feedback,
      });

      return res.status(201).json({
        message: "Usuario creado con éxito",
        userId: response.insertedId, // Puedes incluir el ID del nuevo documento si es necesario
      });
    } catch (error) {
      console.error("Error al insertar en la base de datos:", error);
      return res
        .status(500)
        .json({ message: "Error al guardar en la base de datos" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
};
