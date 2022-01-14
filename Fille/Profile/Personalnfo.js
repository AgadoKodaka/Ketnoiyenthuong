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
import IconPlusDark from '../../assets/SVG/carbon_add-filled_1.svg';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <View style={styles.body}>
        <View style={[styles.bodyText, {marginTop: 76}]}>
          <Text style={[styles.bodyText_Text, {color: '#60B939'}]}>
            Your name
          </Text>
          <TextInput style={styles.bodyTextInput} placeholder="Full Name" />
        </View>
        <View style={styles.bodyText}>
          <Text style={styles.bodyText_Text}>Birthday</Text>
          <TextInput style={styles.bodyTextInput} placeholder="dd/mm/yyyy" />
        </View>
        <View style={styles.bodyText}>
          <Text style={styles.bodyText_Text}>Phone number</Text>
          <TextInput style={styles.bodyTextInput} placeholder="Confirmation" />
          <IconPlusDark style={styles.bodyTextIconPlusDark} fill="red" />
        </View>
        <View style={styles.bodyText}>
          <Text style={styles.bodyText_Text}>Email</Text>
          <TextInput style={styles.bodyTextInput} placeholder="Confirmation" />
        </View>
        <TouchableOpacity style={styles.bodyButton}>
          <Text style={styles.bodyButtonText}>Complete</Text>
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
  bodyText: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  bodyTextInput: {
    marginTop: 10,
    width: '100%',
    height: 50,
    backgroundColor: '#00000014',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  bodyText_Text: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 20,
  },
  bodyTextIconPlusDark: {
    position: 'absolute',
    right: 17,
    top: 62,
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
