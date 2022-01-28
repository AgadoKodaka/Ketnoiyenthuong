import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    flexDirection: 'column',
    alignItems: 'center',
  },
  body: {
    width: '95%',
    marginTop: 76,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#60B939',
    fontWeight: '400',
    fontFamily: 'SF Pro Text',
    textAlign: 'center',
    lineHeight: 30,
  },
  review: {
    width: '100%',
    height: 127,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  reviewContainter: {
    flex: 0.33,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  iconContaner: {
    width: 100,
    height: 100,
    backgroundColor: '#DFDCDC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: {
    resizeMode: 'contain',
  },
  textIcon: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SF Pro Text',
  },
  iconTick: {
    position: 'absolute',
    right: 2,
    bottom: 2,
  },
  textInput: {
    width: '96%',
    height: 60,
    backgroundColor: '#DFDCDC',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 15,
  },
});
export default styles;
