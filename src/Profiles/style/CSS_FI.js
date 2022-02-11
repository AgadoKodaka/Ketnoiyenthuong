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
  bodyText: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  bodyTextInput: {
    marginTop: 20,
    width: '100%',
    height: 60,
    backgroundColor: '#00000014',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  bodyText_Text: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 30,
  },
  bodyTextIconPlusDark: {
    position: 'absolute',
    right: 17,
    top: 90,
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
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
});
export default styles;
