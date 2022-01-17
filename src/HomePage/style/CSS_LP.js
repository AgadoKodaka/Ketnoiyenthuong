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
    marginTop: 50,
    resizeMode: 'cover',
    width: 166,
    height: 49,
  },
  inputId: {
    width: '90%',
    height: 50,
    borderColor: '#C4C4C4',
    borderWidth: 0.5,
    marginTop: 42,
    padding: 10,
    paddingHorizontal: 25,
    color: '#fff',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  inputPassword: {
    width: '90%',
    height: 50,
    marginTop: 18,
  },
  inputPass: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#C4C4C4',
    borderWidth: 0.5,
    padding: 10,
    paddingHorizontal: 25,
    color: '#fff',
    backgroundColor: 'white',
  },
  hide_show: {
    flexDirection: 'row',
    position: 'absolute',
    top: 14,
    right: 14,
    justifyContent: 'space-between',
  },
  forgotPass: {
    marginLeft: 190,
    marginTop: 18,
  },
  passRecoveryText: {
    color: 'black',
    fontSize: 15,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#60B939',
    borderRadius: 8,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createNewAccount: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '90%',
    marginTop: 18,
  },
  signUpText: {
    color: '#60B939',
  },
  otherLoginView: {
    alignItems: 'center',
    marginTop: 43,
  },
  socialMediaView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
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

  imageAcc: {
    width: '100%',
    height: '100%',
  },
});
export default styles;
