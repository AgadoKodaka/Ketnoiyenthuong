import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Switch,
} from 'react-native';
import IconMessageDark from '../../assets/SVG/jam_messenger.svg';
import IconPepople from '../../assets/SVG/ic_round-group.svg';
const App = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <View style={styles.body}>
        <View style={styles.setting}>
          <IconMessageDark style={styles.icon} />
          <View style={styles.textSetting}>
            <Text style={styles.text}>Messages </Text>
          </View>
          <Switch
            style={styles.switch}
            trackColor={{false: '#767577', true: '#2C98F0'}}
            thumbColor={isEnabled1 ? '#8FCAF9' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={isEnabled1}
          />
        </View>
        <View style={styles.setting}>
          <IconPepople style={styles.icon} />
          <View style={styles.textSetting}>
            <Text style={styles.text}>Follower </Text>
          </View>
          <Switch
            style={styles.switch}
            trackColor={{false: '#767577', true: '#2C98F0'}}
            thumbColor={isEnabled2 ? '#8FCAF9' : '#f4f3f4'}
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
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
    marginTop: 111,
  },
  setting: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4',
  },
  icon: {
    flex: 0.2,
    // backgroundColor: 'black',
  },
  textSetting: {
    flex: 0.6,
  },
  text: {
    fontSize: 20,
  },

  switch: {
    // backgroundColor: 'black',
    flex: 0.2,
    right: 0,
  },
});
export default App;
