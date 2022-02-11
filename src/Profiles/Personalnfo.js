import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconPlusDark from '../../assets/SVG/carbon_add-filled_1.svg';
import styles from './style/CSS_FI';
const Page10 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <View style={styles.body}>
        <View style={styles.bodyText}>
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
          <TextInput
            style={styles.bodyTextInput}
            placeholder="Confirmation"
            onSubmitEditing={() => navigation.navigate('PhoneConfirmation')}
          />
          <IconPlusDark style={styles.bodyTextIconPlusDark} />
        </View>
        <View style={styles.bodyText}>
          <Text style={styles.bodyText_Text}>Email</Text>
          <TextInput
            style={styles.bodyTextInput}
            placeholder="Confirmation"
            onSubmitEditing={() => navigation.navigate('EmailInput')}
          />
        </View>
        <TouchableOpacity style={styles.bodyButton}>
          <Text style={styles.bodyButtonText}>Complete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {Page10};
