import { Button } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { trpc } from 'utils/trpc';

export default function Home() {
  const algo = trpc.useQuery(['test']);
  console.log(algo);
  return (
    <div>
      <Button onClick={() => signIn()}>Signin next auth</Button>
    </div>
  );
}
