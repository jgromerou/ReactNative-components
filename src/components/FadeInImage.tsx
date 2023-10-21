import React, {useContext} from 'react';
import {
  View,
  Animated,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const { theme: {colors, dividerColor} } = useContext(ThemeContext);

  const finishLoading = () => {
    setIsLoading(false), fadeIn();
  };
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          size={30}
          color={colors.primary}
        />
      )}
      <Animated.Image
        source={{ uri }}
        // onLoadEnd={() => fadeIn()}
        onLoadEnd={() => finishLoading()}
        style={{
          ...(style as any),
          opacity,
        }}
        // style={{
        //   width: '100%',
        //   height: 400,
        //   opacity,
        // }}
      />
    </View>
  );
};
