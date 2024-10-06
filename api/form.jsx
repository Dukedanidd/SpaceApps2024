// pages/api/form.js
import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, email } = req.body;

        try {
            const client = await clientPromise;
            const db = client.db('NebulaDrift'); // Reemplaza con tu nombre de base de datos

            const response = await db.collection('usuarios').insertOne({ name, email });
            return res.status(201).json(response);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al guardar en la base de datos' });
        }
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
};
