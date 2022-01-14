import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Switch,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const App = () => {
    
    const [isEnabled1, setIsEnabled1] = React.useState(false);
    <View >
        {isEnabled1 ? (
            <View>
        ): (
            <View/>
        )}
    </View>
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <View style={styles.body}>
        <View style={styles.setting}>
          <Text style={styles.text}>Messages </Text>
        </View>
        <View style={styles.review}>
          <TouchableOpacity>
            {/* <SVG></SVG> */}
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <SVG></SVG> */}
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <SVG></SVG> */}
            <Text></Text>
          </TouchableOpacity>
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
});
