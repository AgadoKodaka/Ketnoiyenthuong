import React, {useState} from 'react';
import {SafeAreaView, View, Text, StatusBar, TextInput} from 'react-native';
import styles from './style/CSS_VP';
import IconLove from '../../assets/SVG/in_love1.svg';
import IconSmile from '../../assets/SVG/smile1.svg';
import IconSmile2 from '../../assets/SVG/smile2.svg';
import IconGreenTick from '../../assets/SVG/ant-design_check-circle-filled.svg';

import SquareButton from '../components/SquareButton';
const Page9 = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  const toggleSwitch = number => {
    switch (number) {
      case 1:
        setIsEnabled1(!isEnabled1);
        setIsEnabled2(false);
        setIsEnabled3(false);
        break;
      case 2:
        setIsEnabled2(!isEnabled2);
        setIsEnabled1(false);
        setIsEnabled3(false);
        break;
      case 3:
        setIsEnabled3(!isEnabled3);
        setIsEnabled1(false);
        setIsEnabled2(false);
        break;
      default:
        break;
    }
  };
  const emoji = number => {
    switch (number) {
      case 1:
        return <IconLove style={styles.icon} />;
      case 2:
        return <IconSmile style={styles.icon} />;
      case 3:
        return <IconSmile2 style={styles.icon} />;
      default:
        return null;
    }
  };

  const enable1 = isEnabled1 ? <IconGreenTick style={styles.iconTick} /> : null;
  const enable2 = isEnabled2 ? <IconGreenTick style={styles.iconTick} /> : null;
  const enable3 = isEnabled3 ? <IconGreenTick style={styles.iconTick} /> : null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <View style={styles.body}>
        <Text style={styles.text}>
          Your review will help us improve our servies
        </Text>
        <View style={styles.review}>
          <SquareButton
            styles={styles}
            emoji={emoji(1)}
            enable={enable1}
            text="Very Good"
            toggleSwitch={toggleSwitch}
            number={1}
          />
          <SquareButton
            styles={styles}
            emoji={emoji(2)}
            enable={enable2}
            text="Good"
            toggleSwitch={toggleSwitch}
            number={2}
          />
          <SquareButton
            styles={styles}
            emoji={emoji(3)}
            enable={enable3}
            text="Bad"
            toggleSwitch={toggleSwitch}
            number={3}
          />
        </View>
        <Text style={[styles.text, {left: -152, marginTop: 20, fontSize: 15}]}>
          Review
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Share your feedback with us..."
        />
      </View>
    </SafeAreaView>
  );
};
export {Page9};
