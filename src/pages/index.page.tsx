import { GoogleAuthProvider } from 'firebase/auth';
import { useAuth } from 'hooks/auth-context';
import { StyledFirebaseAuth } from 'core/firebase-auth';

export default function Home() {
  const { auth, user } = useAuth();
  console.log({ user });

  return (
    <>
      {!user && (
        <StyledFirebaseAuth
          firebaseAuth={auth}
          uiConfig={{
            signInOptions: [GoogleAuthProvider.PROVIDER_ID],
            signInFlow: 'popup',
          }}
        />
      )}
    </>
  );
}
