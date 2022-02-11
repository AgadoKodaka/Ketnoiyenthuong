import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Page15 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <View style={styles.body}>
        <Text style={styles.bodyTextHeader}>Confirm your Email address</Text>
        <Text style={styles.bodyText}>
          For better security, we need to confirm your Email address.
        </Text>
        <TextInput
          style={styles.bodyTextInput}
          placeholder="Enter your Email address"
        />
        <Text style={[styles.bodyText, {marginTop: 20}]}>
          We will send a confirmation code to your Email address
        </Text>
        <TouchableOpacity style={styles.bodyButton}>
          <Text style={styles.bodyButtonText}>Confirm</Text>
        </TouchableOpacity>
        {/* <Text style={[styles.bodyText, {marginTop: 20}]}>
          Havent received the code?
          <TouchableOpacity style={{position: 'absolute'}}>
            <Text style={{color: 'green'}}>Resend</Text>
          </TouchableOpacity>
        </Text> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    flexDirection: 'column',
    alignItems: 'center',
  },
  body: {
    width: '90%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  bodyTextHeader: {
    marginTop: 76,
    fontSize: 35,
    fontWeight: 'bold',
    // color: 'black',
  },
  bodyText: {
    width: '100%',
    marginTop: 20,
    fontSize: 15,
    flexDirection: 'row',
  },
  bodyTextInput: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#00000014',
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 11,
  },
  bodyButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#60B939',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  bodyButtonText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },
});
export {Page15};
