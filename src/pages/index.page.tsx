import { GetServerSidePropsContext } from 'next';
import { useAuth } from 'hooks/auth-context';
import { verifyAuthState } from 'lib/firebase/verify-auth-state';

export default function Home() {
  const { user, signOut } = useAuth();

  return <div>home</div>;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return verifyAuthState(ctx);
};
