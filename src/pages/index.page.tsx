import { Button } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { trpc } from 'utils/trpc';

export default function Home() {
  const { refetch } = trpc.useQuery(['test'], { enabled: false });

  return (
    <div>
      <Button onClick={() => signIn()}>Signin with next auth</Button>
      <Button onClick={() => refetch()}>Test prisma</Button>
    </div>
  );
}
