import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import { firebaseAdmin } from './firebase-admin';

const redirectTop = {
  redirect: {
    destination: '/',
    permanent: false,
  },
  props: {} as never,
};

const redirectSignin = {
  redirect: {
    destination: '/signin',
    permanent: false,
  },
  props: {} as never,
};

const empty = {
  props: {},
};

export const verifyAuthState = async (ctx: GetServerSidePropsContext) => {
  const unauthenticated = ['/signin'];
  const cookies = nookies.get(ctx);
  const url = ctx.req.url || '';

  if (unauthenticated.includes(url)) {
    if (cookies.firebaseToken) {
      return redirectTop;
    } else {
      return empty;
    }
  }

  try {
    await firebaseAdmin.auth().verifyIdToken(cookies.firebaseToken);
    return empty;
  } catch (err) {
    return redirectSignin;
  }
};
