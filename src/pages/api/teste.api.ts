import { collection, getDocs, getFirestore } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function teste(req: NextApiRequest, res: NextApiResponse) {
  const db = getFirestore();

  const a = await getDocs(collection(db, 'users'));

  return res.status(200).json({ response: '2' });
}
