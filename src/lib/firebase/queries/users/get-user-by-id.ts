import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

export const getUserById = async (uid: string) => {
  const db = getFirestore();

  const usersRef = collection(db, 'users');
  const getUserById = query(usersRef, where('uid', '==', uid));

  const snapshot = await getDocs(getUserById);
  const user = snapshot.docs.map((user) => user.data());

  return user[0];
};
