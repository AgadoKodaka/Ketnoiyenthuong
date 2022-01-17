import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import image from '../../assets/images/Ellipse_7.png';
import icon from '../../assets/images/carbon_add-alt.png';
import iconEmail from '../../assets/images/email_1.png';
import iconPhone from '../../assets/images/telephone_1.png';
import iconFB from '../../assets/images/entypo-social_facebook-with-circle.png';
import iconHuman from '../../assets/images/Vector_(2).png';
import iconCog from '../../assets/images/Vector_(3).png';
import iconStar from '../../assets/images/Vector_(4).png';
import iconQuestion from '../../assets/images/Vector_(5).png';
import iconArrow from '../../assets/images/Vector_(6).png';
import SvgTest from '../../assets/images/TestingSVG.svg';
import IconBack from '../../assets/SVG/Vector.svg';
import IconHome from '../../assets/SVG/Vector_(1).svg';
import IconHeart from '../../assets/SVG/heart_(1) 2.svg';
import IconMessenger from '../../assets/SVG/Vector_(2).svg';
import IconInfo from '../../assets/SVG/Group_106.svg';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#60B939'} />
      <View style={styles.header}>
        <View style={styles.avatarContainter}>
          <Image source={image} style={styles.image} />
          <Image source={icon} style={styles.iconPlus} />
        </View>
        <View style={styles.textProfile}>
          <Text style={styles.textProfileName}>Trần Trung Giới</Text>
          <Text style={styles.textProfileAdd}>Hà Đông, Hà Nội</Text>
          <TouchableOpacity style={styles.buttonEdit}>
            <Text style={styles.textProfileOtherOption}>
              Check the account as guest
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyStatus}>
          <View style={styles.addCounter}>
            <Text style={[styles.textCounterNumber, {left: 3}]}>10</Text>
            <Text style={styles.textCounter}>Already Given</Text>
            <View style={styles.addCounterBarrier1} />
          </View>
          <View style={styles.addCounter}>
            <Text style={[styles.textCounterNumber, {left: 0.5}]}>10</Text>
            <Text style={styles.textCounter}>Followers </Text>
            <View style={styles.addCounterBarrier1} />
          </View>
          <View style={styles.addCounter}>
            <Text style={styles.textCounterNumber}>10</Text>
            <Text style={styles.textCounter}>Following </Text>
          </View>
        </View>
        <View style={styles.bodyConfimationMethod}>
          <View style={styles.bodyConfimationMethodDecoration}>
            <View style={styles.bodyConfimationMethodDecorationDeadSpace} />
            <Text style={styles.bodyConfimationMethodDecorationText}>
              Already Confirm Method
            </Text>
            <View style={styles.bodyConfimationMethodDecorationDeadSpace} />
          </View>
          <View style={styles.bodyConfimationMethodIcons}>
            <Image
              source={iconEmail}
              style={styles.bodyConfimationMethodIcon}
            />
            <Image
              source={iconPhone}
              style={styles.bodyConfimationMethodIcon}
            />
            <Image source={iconFB} style={styles.bodyConfimationMethodIcon} />
            <Image
              source={iconHuman}
              style={styles.bodyConfimationMethodIcon}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[styles.bodySettingOptionsItem, {marginTop: 40}]}>
          <Image source={iconCog} style={styles.bodySettingOptionsItemIcon} />
          <Text style={[styles.bodySettingOptionsItemText, {numberOfLines: 1}]}>
            Account setting
          </Text>
          <IconBack style={styles.bodySettingOptionsItemIconBack} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bodySettingOptionsItem}>
          <Image source={iconStar} style={styles.bodySettingOptionsItemIcon} />
          <Text style={styles.bodySettingOptionsItemText}>Rate!!</Text>
          <IconBack style={styles.bodySettingOptionsItemIconBack} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bodySettingOptionsItem, {borderBottomWidth: 0}]}>
          <Image
            source={iconQuestion}
            style={styles.bodySettingOptionsItemIcon}
          />
          <Text style={styles.bodySettingOptionsItemText}>Help</Text>
          <IconBack style={styles.bodySettingOptionsItemIconBack} />
        </TouchableOpacity>
        {/* <View
            style={[
              StyleSheet.absoluteFill,
              {alignItems: 'center', justifyContent: 'center'},
            ]}>
            <SvgTest />
          </View> */}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <IconHome />
          <Text style={styles.footerItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <IconHeart />
          <Text style={styles.footerItemText}>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <IconMessenger />
          <Text style={styles.footerItemText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          {/* <SVG /> */}
          <Text style={styles.footerItemText}>Management</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <IconInfo />
          <Text style={styles.footerItemText}>Info</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#F5F6F8',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  avatarContainter: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
    left: -16,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  iconPlus: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '30%',
    height: '30%',
  },
  textProfile: {
    // backgroundColor: '#fff',
    width: '80%',
    left: 16,
    top: 5,
  },
  textProfileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textProfileAdd: {},
  buttonEdit: {},
  textProfileOtherOption: {
    color: '#60B939',
  },
  body: {
    flexDirection: 'column',
    marginTop: 24,
  },
  bodyStatus: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    // backgroundColor: '#fff',
  },
  addCounter: {
    flex: 0.33,
    alignItems: 'center',
  },
  textCounterNumber: {
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
  },
  textCounter: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    left: 4,
  },
  addCounterBarrier1: {
    alignSelf: 'flex-end',
    borderRightWidth: 1,
    borderRightColor: '#C4C4C4',
    height: 35,
    position: 'absolute',
    top: 16,
  },
  bodyConfimationMethod: {
    flexDirection: 'column',
    width: '100%',
    height: 117,
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    marginTop: 20,
    alignSelf: 'center',
  },
  bodyConfimationMethodDecoration: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
  },
  bodyConfimationMethodDecorationDeadSpace: {
    flex: 0.4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4',
  },
  bodyConfimationMethodDecorationText: {
    top: 20,
  },
  bodyConfimationMethodIcons: {
    flexDirection: 'row',
  },
  bodyConfimationMethodIcon: {
    flex: 0.25,
    resizeMode: 'contain',
    height: 35,
    width: 35,
    marginTop: 30.5,
  },
  bodySettingOptions: {
    flexDirection: 'column',
    height: 50,
    width: '100%',
    marginTop: 60,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  bodySettingOptionsItem: {
    flexDirection: 'row',
    width: '75%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    alignSelf: 'center',
    marginTop: 10,
  },
  bodySettingOptionsItemIcon: {
    flex: 0.33,
    width: 20,
    height: 30,
    resizeMode: 'contain',
    left: -35,
    alignContent: 'flex-start',
    // backgroundColor: '#fff',
  },
  bodySettingOptionsItemText: {
    flex: 0.33,
    width: '100%',
    fontSize: 18,
    fontWeight: '400',
    left: -108,
    // backgroundColor: '#fff',
    // flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
  },
  bodySettingOptionsItemIconBack: {
    flex: 0.33,
    width: 7.41,
    height: 12,
    right: -35,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 69,
    backgroundColor: '#FFFFFF',
  },
  footerItem: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
