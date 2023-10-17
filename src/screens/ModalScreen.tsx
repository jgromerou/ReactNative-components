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
          }}
        >
          <View style={{ backgroundColor: 'white' }}>
            <HeaderTitle title="Modal" />
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
