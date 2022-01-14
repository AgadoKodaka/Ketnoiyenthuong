import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const logo1 = require('../assets/images/logo1.png');
const Page5 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <Image source={logo1} style={styles.image} />
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
        Reset your password
      </Text>
      <Text style={{width: '80%', textAlign: 'center', marginTop: 18}}>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  image: {
    marginTop: 81,
    marginBottom: 25,
  },
  inputId1: {
    width: '80%',
    height: 50,
    borderColor: '#C4C4C4',
    borderWidth: 0.5,
    marginTop: 42,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  inputId2: {
    width: '80%',
    height: 50,
    borderColor: '#C4C4C4',
    borderWidth: 0.5,
    marginTop: 18,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#60B939',
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAccGG: {
    marginTop: 18,
    width: 30,
    height: 30,
    left: -10,
  },
  buttonAccFB: {
    marginTop: 18,
    width: 35,
    height: 35,
    right: -10,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
    borderBottomColor: 'black',
  },
  otpView: {
    width: '80%',
    height: 10,
    marginTop: 18,
    color: 'black',
  },
  resentOTP: {
    width: '80%',
    height: 50,
    marginTop: 65,
    alignItems: 'center',
  },
});

export {Page5};
