import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { auth } from 'firebaseui';
import type { Auth } from 'firebase/auth';

interface IFirebaseAuthProps {
  uiConfig: auth.Config;
  uiCallback?(ui: auth.AuthUI): void;
  firebaseAuth: Auth;
}

export const StyledFirebaseAuth = ({
  uiConfig,
  firebaseAuth,
  uiCallback,
}: IFirebaseAuthProps) => {
  useEffect(() => {
    if (process.title === 'browser') {
      const firebaseui = require('firebaseui');
      require('firebaseui/dist/firebaseui.css');

      const firebaseUiWidget =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebaseAuth);

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
