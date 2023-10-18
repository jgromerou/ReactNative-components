import React from 'react';
import { View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { Button } from 'react-native';
import { Modal } from 'react-native';
import { useState } from 'react';
import { Text } from 'react-native';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button title="Abrir el Modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        {/* Background Gris */}
        <View
          style={{
            flex: 1,
            // width: 100,
            // height: 100,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Contenido del Modal */}
          <View
            style={{
              height: 200,
              width: 200,
              backgroundColor: 'white',
              justifyContent: 'space-around',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
            <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>
              Cuerpo del Modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
