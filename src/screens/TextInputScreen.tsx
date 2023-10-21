import React, { useContext } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/ThemeContext';

export const TextInputScreen = () => {
  const { form, onChange, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const { theme: {colors, dividerColor} } = useContext(ThemeContext);

  //   const onChange = (value: string, field: string) => {
  //     setForm({
  //       ...form,
  //       [field]: value,
  //     });
  //   };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />

            <TextInput
              style={{...stylesScreen.inputStyle, borderColor: colors.text, color: colors.text}}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={(value) => onChange(value, 'name')}
              placeholderTextColor={dividerColor}
            />
            <TextInput
              style={{...stylesScreen.inputStyle, borderColor: colors.text, color: colors.text}}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark"
              placeholderTextColor={dividerColor}
            />

            <Text>Suscribirme</Text>

            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>isActive</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={(value) => onChange(value, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
             style={{...stylesScreen.inputStyle, borderColor: colors.text, color: colors.text}}
              placeholder="Ingrese su teléfono"
              onChangeText={(value) => onChange(value, 'phone')}
              keyboardType="phone-pad"
              placeholderTextColor={dividerColor}
            />

            <View style={{ height: 100 }} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    //borderColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10,
  },
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
