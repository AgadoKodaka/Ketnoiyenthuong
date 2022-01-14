import React, {useState} from 'react';
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
import OTPInputView from '@twotalltotems/react-native-otp-input';
const logo1 = require('../assets/images/logo1.png');
const Page4 = props => {
  console.log('props', props);
  const [otp, setOtp] = useState('');
  const OTP = '123456';
  function checkOTP(value) {
    if (value === OTP) {
      props.navigation.navigate('PassReset');
    } else {
      alert('Wrong code');
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <Image source={logo1} style={styles.image} />
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
        Enter your OTP for confirmation
      </Text>
      <Text style={{width: '80%', textAlign: 'center', marginTop: 18}}>
        Your OTP has been sent to your email or phone number.
      </Text>

      <OTPInputView
        pinCount={6}
        style={styles.otpView}
        codeInputFieldStyle={styles.underlineStyleBase}
        autoFocusOnLoad
        onCodeFilled={value => {
          setOtp(value);
        }}
      />
      <TouchableOpacity
        style={styles.resentOTP}
        onPress={() => {
          alert('Resend OTP');
        }}>
        <Text style={{color: '#60B939', fontSize: 16}}>Resend OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => checkOTP(otp)}>
        {/* checkOTP ? (onPress{() => navigation.navigate()}) : (alert('Wrong
        code')) */}
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
    marginTop: 65,
    alignItems: 'center',
  },
});

export {Page4};
