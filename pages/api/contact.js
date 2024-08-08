// pages/api/contact.js
import clientPromise from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('assignm');
      const collection = db.collection('contacts');

      const { name, email, phone } = req.body;

      const result = await collection.insertOne({ name, email, phone });

      res.status(200).json({ message: 'Contact saved successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to save contact' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
