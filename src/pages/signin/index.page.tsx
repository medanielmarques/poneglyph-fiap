import { Button } from '@chakra-ui/react';
import { StyledFirebaseAuth } from 'core/firebase-auth';
import { useAuth } from 'hooks/auth-context';

export default function Teste() {
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
