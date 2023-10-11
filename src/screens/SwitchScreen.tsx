import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: true,
  });

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
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={(value) => onChange(value, 'isActive')}
        />
      </View>

      {/* Switch isHungry */}
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={(value) => onChange(value, 'isHungry')}
        />
      </View>

      {/* Switch isHappy */}
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={(value) => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={styles.switchText}>{JSON.stringify(state, null, 4)}</Text>
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
