import {StyleSheet} from 'react-native';
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
  setting: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4',
  },
  icon: {
    flex: 0.2,
  },
  textSetting: {
    flex: 0.6,
  },
  text: {
    fontSize: 20,
  },

  switch: {
    flex: 0.2,
    right: 0,
  },
});
export default styles;
