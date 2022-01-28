import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import IconHuman from '../../assets/SVG/carbon_user-filled.svg';
import IconBell from '../../assets/SVG/bell_1.svg';
import IconBack from '../../assets/SVG/Vector.svg';
import styles from './style/CSS_AC';
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
