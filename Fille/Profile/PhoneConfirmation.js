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
import IconFlagVN from '../../assets/SVG/Flag_of_North_Vietnam_(19551976).svg';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <View style={styles.body}>
        <Text style={styles.bodyTextHeader}>Confirm your phone number</Text>
        <Text style={styles.bodyText}>
          For better security, we need to confirm your phone number.
        </Text>
        <View style={styles.bodyTextDecoration}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 0.4,
              //   marginRight: -120,
              marginLeft: -15,
              borderRightColor: 'white',
              borderRightWidth: 2,
            }}>
            <IconFlagVN />
            <Text style={[styles.bodyTextPs, {right: -7}]}>+84</Text>
          </View>
          <TextInput
            style={styles.bodyTextInput}
            placeholder="Enter your phone number"
          />
        </View>
        <Text style={[styles.bodyText, {marginTop: 20}]}>
          We will send a confirmation code to your number (+84)
        </Text>
        <TouchableOpacity style={styles.bodyButton}>
          <Text style={styles.bodyButtonText}>Confirm</Text>
        </TouchableOpacity>
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
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  },
  bodyText: {
    width: '100%',
    marginTop: 20,
  },
  bodyTextDecoration: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#00000014',
    flexDirection: 'row',
  },
  bodyTextInput: {
    paddingHorizontal: 16,
    flex: 0.6,
  },
  bodyTextPs: {
    fontSize: 17,
    fontWeight: '600',
    left: 15,
    color: 'black',
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
export default App;
