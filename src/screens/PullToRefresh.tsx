import React, { useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefresh = () => {
  const { top } = useSafeAreaInsets();

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
          progressBackgroundColor="#5856D6"
          colors={['white']}
          //es para ios. para ver title y el color del backgroung
          //   style={{ backgroundColor: '#5856D6' }}
          //   tintColor={'white'}
          //   title="Refreshing"
          //   titleColor="white"
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
