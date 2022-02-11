import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  image: {
    marginTop: 81,
    marginBottom: 25,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#60B939',
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAccGG: {
    marginTop: 18,
    width: 30,
    height: 30,
    left: -10,
  },
  buttonAccFB: {
    marginTop: 18,
    width: 35,
    height: 35,
    right: -10,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
    borderBottomColor: 'black',
  },
  otpView: {
    width: '80%',
    height: 10,
    marginTop: 18,
    color: 'black',
  },
  resentOTP: {
    marginTop: 65,
    alignItems: 'center',
  },
});
export default styles;
