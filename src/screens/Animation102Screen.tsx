import { useRef, useContext } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export const Animation102Screen = () => {
    const { theme: {colors}} = useContext(ThemeContext);
    const pan = useRef(new Animated.ValueXY()).current;
  
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x, // x,y are Animated.Value
            dy: pan.y,
          },
        ], {
          useNativeDriver: false
        }
      ),
      onPanResponderRelease: () => {
        Animated.spring(
          pan, // Auto-multiplexed
          {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
        ).start();
      },
    });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), {backgroundColor: colors.primary,
        width: 150,
        height: 150,}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // purpleBox: {
  //   backgroundColor: '#75CEDB',
  //   width: 150,
  //   height: 150,
  // },
})
