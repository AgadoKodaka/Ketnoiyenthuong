import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo1 from '../../assets/SVG/logo_1.svg';
import LogoFB from '../../assets/SVG/btnSigninwithFb.svg';
import LogoGG from '../../assets/SVG/btnSigninwithGoogle.svg';
import IconShowPass from '../../assets/SVG/carbon_view_filled.svg';
import IconHidePass from '../../assets/SVG/carbon_view_off_filled.svg';
import styles from './style/CSS_MNA';
const Page2 = () => {
  const [protection, setProtection] = useState(true);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <Logo1 style={styles.image} />
      <TextInput
        style={styles.inputId1}
        placeholder="Full Name"
        color="black"
      />
      <TextInput
        style={styles.inputId2}
        placeholder="Email or Phone Number"
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
            <IconHidePass style={styles.eye} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setProtection(false)}>
            <IconShowPass style={styles.eye} />
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
        <Text style={styles.text}>Already have an account?</Text>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otherLoginView}>
        <Text style={{fontSize: 14}}>- Or login with -</Text>
      </View>
      <View style={styles.socialMediaView}>
        <TouchableOpacity
          style={styles.buttonAccGG}
          onPress={() => Linking.openURL('https://www.google.com/')}>
          <LogoGG style={styles.imageAcc} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonAccFB}
          onPress={() => Linking.openURL('https://www.facebook.com/')}>
          <LogoFB style={styles.imageAcc} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {Page2};
