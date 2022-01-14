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
import {useNavigation} from '@react-navigation/native';
const logo1 = require('../assets/images/logo1.png');
const Page3 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <Image source={logo1} style={styles.image} />
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
        Recover your account
      </Text>
      <Text style={{width: '80%', textAlign: 'center', marginTop: 18}}>
        If you forgot your password, please enter your email address or phone
        number below.
      </Text>
      <TextInput
        style={styles.input}
        // value={text}
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
  input: {
    // position: 'absolute',
    width: '80%',
    height: 50,
    borderColor: '#C4C4C4',
    borderWidth: 0.5,
    marginTop: 20,
    marginBottom: 18,
    padding: 10,
    color: '#fff',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 25,
  },
  forgotPass: {
    // height: 50,
    // backgroundColor: 'black',
    borderRadius: 8,
    // marginTop: 20,
    // marginBottom: 20,
    marginLeft: 190,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  passRecoveryText: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    //textAlign: 'right',
    // right: -100,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#60B939',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#00BFFF',
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

export {Page3};
