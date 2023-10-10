import { View, StyleSheet } from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.redBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  redBox: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
});
