import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import IconHuman from '../../assets/SVG/carbon_user-filled.svg';
import IconBell from '../../assets/SVG/bell_1.svg';
import IconBack from '../../assets/SVG/Vector.svg';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <TouchableOpacity
        style={[styles.bodySettingOptionsItem, {marginTop: 56}]}>
        <IconHuman />
        <Text style={[styles.bodySettingOptionsItemText]}>
          Personal Information
        </Text>
        <IconBack style={styles.bodySettingOptionsItemIconBack} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.bodySettingOptionsItem]}>
        <IconBell />
        <Text style={[styles.bodySettingOptionsItemText]}>
          Nofication Setting
        </Text>
        <IconBack style={styles.bodySettingOptionsItemIconBack} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bodySettingOptionsItem}>
        <Text style={{color: 'red', fontSize: 16}}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bodySettingOptionsItem: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F6F8',
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    // backgroundColor: 'white',
  },
  bodySettingOptionsItemText: {
    // textAlign: 'left',
    flex: 0.8,
    // backgroundColor: 'black',
    marginLeft: -23,
    fontSize: 16,
    fontWeight: '400',
  },
  bodySettingOptionsItemIconBack: {
    flex: 0.1,
  },
});
