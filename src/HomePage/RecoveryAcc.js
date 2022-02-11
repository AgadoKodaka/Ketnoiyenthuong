import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo1 from '../../assets/SVG/logo_1.svg';
import styles from './style/CSS_RA';
const Page3 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <Logo1 style={styles.image} />
      <Text style={{fontSize: 21, fontWeight: 'bold', color: 'black'}}>
        Recover your account
      </Text>
      <Text
        style={{
          width: '90%',
          textAlign: 'center',
          marginTop: 18,
          fontSize: 15,
        }}>
        If you forgot your password, please enter your email address or phone
        number below.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email or Phone Number"
        color="black"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('2faAuth')}>
        <Text style={(styles.buttonText, {color: 'white'})}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export {Page3};
