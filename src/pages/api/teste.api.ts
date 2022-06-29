import type { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

// type Data = {
//   name: string;
// };

export default async function teste(req: NextApiRequest, res: NextApiResponse) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAk4VzMT-OlmadimC0AdunFZOEBrjtlOos',
    authDomain: 'poneglyph-app.firebaseapp.com',
    projectId: 'poneglyph-app',
    storageBucket: 'poneglyph-app.appspot.com',
    messagingSenderId: '132951714033',
    appId: '1:132951714033:web:7211b164eeb8e59206e150',
    measurementId: 'G-8TKPS95MEY',
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  const response = await signInWithPopup(auth, googleProvider);

  return res.status(200).json({ response, user: response.user });
}
