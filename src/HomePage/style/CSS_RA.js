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
  input: {
    width: '90%',
    height: 50,
    borderColor: '#C4C4C4',
    borderWidth: 0.5,
    marginTop: 20,
    marginBottom: 18,
    padding: 10,
    color: '#fff',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 25,
  },
  forgotPass: {
    borderRadius: 8,
    marginLeft: 190,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  passRecoveryText: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#60B939',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#00BFFF',
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
