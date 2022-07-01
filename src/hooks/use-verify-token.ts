import { firebaseAdmin } from 'lib/firebase-admin';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

export const useVerifyToken = async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx);
  return firebaseAdmin.auth().verifyIdToken(cookies.firebaseToken);
};
