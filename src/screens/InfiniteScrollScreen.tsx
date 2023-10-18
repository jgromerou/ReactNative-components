import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from './FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + 1;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      //TODO: Probar con la imagen animada tercero.
      <FadeInImage
        uri={`https://fastly.picsum.photos/id/${item}/500/400`}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 10,
        }}
      />
    );

    //TODO: Probar con el texto primero
    // return <Text style={styles.textItem}>{item}</Text>;
    //TODO: Probar con la imagen segundo
    // return (
    // <Image
    //   source={{ uri: `https://fastly.picsum.photos/id/${item}/500/400` }}
    //   style={{
    //     width: '100%',
    //     height: 400,
    //   }}
    // />
    //);
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={
          <View style={{ marginBottom: 20 }}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        }
        // onEndReached={() => console.log('cargando data...')}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator size={25} color="#5856D6" />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
