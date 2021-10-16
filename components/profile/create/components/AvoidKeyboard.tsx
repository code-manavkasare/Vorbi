import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import theme from '../../../../theme';

export default function AvoidKeyboard({ children }) {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      style={{ flex: 1, backgroundColor: theme.background.primary100 }}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}
