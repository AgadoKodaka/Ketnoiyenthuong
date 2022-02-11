import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Logo1 from '../../assets/SVG/logo_1.svg';
import styles from './style/CSS_PR';
const Page5 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <Logo1 style={styles.image} />
      <Text style={{fontSize: 21, fontWeight: 'bold', color: 'black'}}>
        Reset your password
      </Text>
      <Text
        style={{
          width: '80%',
          textAlign: 'center',
          marginTop: 18,
          fontSize: 15,
        }}>
        Create your new password below.
      </Text>
      <TextInput
        style={styles.inputId1}
        placeholder="Enter your new password"
        color="black"
      />
      <TextInput
        style={styles.inputId2}
        placeholder="Confirm your new password"
        color="black"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={(styles.buttonText, {color: 'white'})}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export {Page5};
