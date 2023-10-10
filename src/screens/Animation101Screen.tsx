import { useRef } from 'react';
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const heightBox = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(heightBox, {
      toValue: 0,
      duration: 2000, //700
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => console.log('Animación terminó'));
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity: opacity,
          // top: heightBox,
          transform: [
            {
              translateY: heightBox,
            },
          ],
        }}
      />
      <Button title="Fade In" onPress={fadeIn} />

      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
