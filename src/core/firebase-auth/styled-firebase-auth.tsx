import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { auth } from 'firebaseui';
import { GoogleAuthProvider } from 'firebase/auth';
import { useAuth } from 'hooks/auth-context';

interface FirebaseUIProps {
  uiConfig: auth.Config;
  uiCallback?(ui: auth.AuthUI): void;
}

const FirebaseUI = ({ uiConfig, uiCallback }: FirebaseUIProps) => {
  const { auth } = useAuth();

  useEffect(() => {
    if (process.title === 'browser') {
      const firebaseui = require('firebaseui');
      require('firebaseui/dist/firebaseui.css');

      const firebaseUiWidget =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(auth);

      if (uiConfig.signInFlow === 'popup') {
        firebaseUiWidget.reset();
      }

      uiCallback && uiCallback(firebaseUiWidget);

      firebaseUiWidget.start('#firebaseui-auth-container', uiConfig);

      return () => {
        firebaseUiWidget.reset();
      };
    }
  }, [uiConfig]);

  return <Box id='firebaseui-auth-container' />;
};

export const StyledFirebaseAuth = () => {
  return (
    <FirebaseUI
      uiConfig={{
        signInOptions: [GoogleAuthProvider.PROVIDER_ID],
        signInFlow: 'popup',
      }}
    />
  );
};
