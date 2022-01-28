import {StyleSheet} from 'react-native';

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
  },
  bodySettingOptionsItemText: {
    flex: 0.8,
    marginLeft: -23,
    fontSize: 16,
    fontWeight: '400',
  },
  bodySettingOptionsItemIconBack: {
    flex: 0.1,
  },
});
export default styles;
