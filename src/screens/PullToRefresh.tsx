import React, { useState, useContext } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/ThemeContext';

export const PullToRefresh = () => {
  const { top } = useSafeAreaInsets();
  const { theme: {colors, dividerColor,dark} } = useContext(ThemeContext);

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 3500);
  };

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={dividerColor}
          colors={[colors.text]}
          //es para ios. para ver title y el color del backgroung
          //   style={{ backgroundColor: '#5856D6' }}
          //   tintColor={'white'}
          //   title="Refreshing"
          //   titleColor="white"
          //TODO: solucionar el problema de la variable dark
          //tintColor={dark ? 'white', 'black'}
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />

        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};
