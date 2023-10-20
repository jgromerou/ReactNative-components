import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '../context/ThemeContext';
import { MenuItem } from '../interfaces/interfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation();
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as never)}
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#5856D6" size={23} />
        <Text style={{ ...styles.itemText, color: 'black' }}>
          {menuItem.name}
        </Text>
        <View style={{ flex: 1 }} />
        <Icon name="chevron-forward-outline" color="#5856D6" size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});

//<Text style={styles.itemText}>{menuItem.name}</Text>
