import React, { useState } from 'react';
import { Button, View, Alert } from 'react-native';
import Dialog from 'react-native-dialog';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { StyleSheet } from 'react-native';

export const AlertScreen = () => {
  const [visible, setVisible] = useState(false);

  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Este es el mensaje de la Alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      }
    );
  };

  const showPrompt = () => {
    // Alert.prompt(
    //   '¿Estás seguro?',
    //   'Esta acción no se puede revertir',
    //   (valor: string) => console.log('info: ', valor),
    //   'plain-text',
    //   'Hola Mundo',
    //   'number-pad'
    // );
  };

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    console.log('cancel');
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
    console.log('Delete');
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert" />

      <Button title="Mostrar Alerta" onPress={showAlert} />
      <View style={{ height: 10 }} />
      {/* <Button title="Mostrar Prompt" onPress={showPrompt} /> */}

      <Button title="Mostrar Dialog Libreria" onPress={showDialog} />
      <View style={stylesDialog.container}>
        <Button title="Show dialog" onPress={showDialog} />
        <Dialog.Container visible={visible} onBackdropPress={handleCancel}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Delete" onPress={handleDelete} />
        </Dialog.Container>
      </View>
    </View>
  );
};

const stylesDialog = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
