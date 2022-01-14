import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
  DrawerLayoutAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const logo1 = require('../assets/images/logo1.png');
const logoFB = require('../assets/images/btnSigninwithFb.png');
const logoGG = require('../assets/images/iconGoogle.png');
const iconShowPass = require('../assets/images/carbon_view-filled.png');
const iconHidePass = require('../assets/images/carbon_view-off-filled.png');
const Page1 = () => {
  const [protection, setProtection] = useState(true);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <Image source={logo1} style={styles.image} />
      <TextInput
        style={styles.inputId}
        placeholder="Email or Phone Number"
        returnKeyType="next"
        blurOnSubmit={false}
        color="black"
      />
      <View style={styles.inputPassword}>
        <TextInput
          style={styles.inputPass}
          placeholder="Password"
          keyboardType="numeric"
          color="black"
          secureTextEntry={protection}
          maxLength={5}
        />
        <View style={styles.hide_show}>
          <TouchableOpacity
            style={{left: -7}}
            onPress={() => setProtection(true)}>
            <Image source={iconHidePass} style={styles.eye} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setProtection(false)}>
            <Image source={iconShowPass} style={styles.eye} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.forgotPass}
        onPress={() => navigation.navigate('RecoverAccount')}>
        <Text style={styles.passRecoveryText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={(styles.buttonText, {color: 'white'})}>Login</Text>
      </TouchableOpacity>
      <View style={styles.createNewAccount}>
        <Text style={styles.text}>You don't have an account?</Text>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => navigation.navigate('MakeNewAccount')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otherLoginView}>
        <Text style={{fontSize: 14}}>- Or login with -</Text>
      </View>
      <View style={styles.socialMediaView}>
        <TouchableOpacity
          style={styles.buttonAccGG}
          onPress={() => Linking.openURL('https://www.google.com/')}>
          <Image style={styles.imageAcc} source={logoGG} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonAccFB}
          onPress={() => Linking.openURL('https://www.facebook.com/')}>
          <Image style={styles.imageAcc} source={logoFB} />
        </TouchableOpacity>
      </View>
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
    marginTop: 50,
    resizeMode: 'cover',
    width: 166,
    height: 49,
  },
  inputId: {
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
  inputPassword: {
    width: '80%',
    height: 50,
    marginTop: 18,
  },
  inputPass: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#C4C4C4',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: 'white',
  },
  hide_show: {
    flexDirection: 'row',
    position: 'absolute',
    top: 14,
    right: 14,
    justifyContent: 'space-between',
  },
  forgotPass: {
    marginLeft: 190,
    marginTop: 18,
  },
  passRecoveryText: {
    color: 'black',
    fontSize: 15,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#60B939',
    borderRadius: 8,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createNewAccount: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '80%',
    marginTop: 18,
  },
  signUpText: {
    color: '#60B939',
  },
  otherLoginView: {
    alignItems: 'center',
    marginTop: 43,
  },
  socialMediaView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
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

  imageAcc: {
    width: '100%',
    height: '100%',
  },
});

export {Page1};
