import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/ThemeContext';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: true,
  });

  const { theme: {colors} } = useContext(ThemeContext);

  const { isActive, isHungry, isHappy } = state;

  const onChange = (value: Boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{ marginTop: 15, marginHorizontal: 20 }}>
      <HeaderTitle title="Switches" color="#5856D6" />

      {/* Switch isActive */}
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={(value) => onChange(value, 'isActive')}
        />
      </View>

      {/* Switch isHungry */}
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={(value) => onChange(value, 'isHungry')}
        />
      </View>

      {/* Switch isHappy */}
      <View style={styles.switchRow}>
        <Text  style={{...styles.switchText, color: colors.text}}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={(value) => onChange(value, 'isHappy')}
        />
      </View>

      <Text  style={{...styles.switchText, color: colors.text}}>{JSON.stringify(state, null, 4)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
