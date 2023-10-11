import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

interface Props {
  title: string;
  color?: string;
}

export const HeaderTitle = ({ title, color = '#000' }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
      <Text style={{ ...styles.title, color }}>{title}</Text>
    </View>
  );
};
