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
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <View style={styles.body}>
        <View style={styles.menuContainter}>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.bodyTextHeader}>
              5 people are following you
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.bodyTextHeader}>Follwing 5 people</Text>
          </TouchableOpacity>
        </View>
        {/* <SVG></SVG> */}
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
  menu: {
    width: '50%',
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  menuContainter: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 56,
  },
  bodyTextHeader: {
    width: '50%',
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
  },
});
export default App;
