import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, TouchableOpacity} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Logo1 from '../../assets/SVG/logo_1.svg';
import styles from './style/CSS_2fa';
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
      <Logo1 style={styles.image} />
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
        <Text style={(styles.buttonText, {color: 'white'})}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export {Page4};
