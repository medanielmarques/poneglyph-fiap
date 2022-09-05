import { Button } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { trpc } from 'utils/trpc';

export default function HomePage() {
  const { refetch } = trpc.useQuery(['test'], { enabled: false });

  const { data: session } = useSession();

  session && console.log(session);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {session ? (
        <>
          <Button onClick={() => signOut()}>
            Signout, {session.user?.name}
          </Button>
        </>
      ) : (
        <Button onClick={() => signIn()}>Signin</Button>
      )}

      <Button onClick={() => refetch()}>Test prisma</Button>
    </div>
  );
}
