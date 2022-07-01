import { GetServerSidePropsContext } from 'next';
import { Button } from '@chakra-ui/react';
import { useAuth } from 'hooks/auth-context';
import { StyledFirebaseAuth } from 'core/firebase-auth';
import { useVerifyToken } from 'hooks/use-verify-token';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  QuerySnapshot,
  where,
} from 'firebase/firestore';
import { getUserById } from 'lib/firebase/queries/users/get-user-by-id';

export default function Home() {
  const { user, signOut } = useAuth();

  return (
    <>
      {user ? (
        <Button onClick={signOut}>Sign Out</Button>
      ) : (
        <StyledFirebaseAuth />
      )}
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const { uid, email } = await useVerifyToken(ctx);

    console.log({ uid, email });

    const user = await getUserById(uid);

    console.log(user);

    return { props: {} as never };
  } catch (error) {
    ctx.res.writeHead(302, { location: '/teste' });
    ctx.res.end();

    return { props: {} as never };
  }
};
