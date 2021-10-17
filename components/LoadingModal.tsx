import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ActivityIndicator, Modal, Portal } from 'react-native-paper';
import theme from '../theme';

export default function LoadingModal({ visible, text }) {
  return (
    <Portal>
      <Modal
        dismissable={false}
        style={styles.container}
        contentContainerStyle={styles.modal}
        visible={visible}
      >
        <ActivityIndicator color="white" size={20} animating={true} />
        {text && <Text style={styles.text}>{text}</Text>}
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    height: theme.height,
    width: theme.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    position: 'absolute',
    top: theme.height * 0.4,
    borderRadius: 5,
    backgroundColor: theme.background.primary200,
  },
  text: { marginTop: 25, fontSize: 18, color: '#fff' },
});
