import { useContext } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/ThemeContext';

export const Animation101Screen = () => {
  const { opacity, position, fadeIn, fadeOut, startMovingPosition } =
    useAnimation();

  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          marginBottom: 20,
          opacity: opacity,
          // top: heightBox,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMovingPosition(-150);
        }}
        color={colors.primary}
      />

      <Button
        title="Fade Out"
        onPress={fadeOut}
        color={colors.primary}
      />
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
    //backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
