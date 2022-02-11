import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style/CSS_HP';
import image from '../../assets/images/Ellipse_7.png';
import icon from '../../assets/images/carbon_add-alt.png';
import IconEmail from '../../assets/SVG/email1.svg';
import IconPhone from '../../assets/SVG/telephone1.svg';
import IconFB from '../../assets/SVG/entypo-social_facebook_with_circle.svg';
import IconHuman from '../../assets/SVG/bx_bxs_user_circle.svg';
import IconBack from '../../assets/SVG/Vector.svg';
import IconHome from '../../assets/SVG/Vector_(1).svg';
import IconHeart from '../../assets/SVG/heart_(1) 2.svg';
import IconMessenger from '../../assets/SVG/Vector_(2).svg';
import IconInfo from '../../assets/SVG/Group_106.svg';
import IconCog from '../../assets/SVG/clarity_settings_solid.svg';
import IconStar from '../../assets/SVG/ant-design_star_filled.svg';
import IconHelp from '../../assets/SVG/ic_round-contact_support.svg';
import {useNavigation} from '@react-navigation/native';

const Page7 = () => {
  const navigation = useNavigation();
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
            <View style={styles.bodyConfimationMethodIcon}>
              <IconEmail />
            </View>
            <View style={styles.bodyConfimationMethodIcon}>
              <IconPhone />
            </View>
            <View style={styles.bodyConfimationMethodIcon}>
              <IconFB />
            </View>
            <View style={styles.bodyConfimationMethodIcon}>
              <IconHuman />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.bodySettingOptionsItem, {marginTop: 40}]}
          onPress={() => navigation.navigate('AccountSetting')}>
          <IconCog style={styles.bodySettingOptionsItemIcon} />
          <Text style={[styles.bodySettingOptionsItemText, {numberOfLines: 1}]}>
            Account setting
          </Text>
          <IconBack style={styles.bodySettingOptionsItemIconBack} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bodySettingOptionsItem}
          onPress={() => navigation.navigate('VottingPage')}>
          <IconStar style={styles.bodySettingOptionsItemIcon} />
          <Text style={styles.bodySettingOptionsItemText}>Rate!!</Text>
          <IconBack style={styles.bodySettingOptionsItemIconBack} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bodySettingOptionsItem, {borderBottomWidth: 0}]}>
          <IconHelp style={styles.bodySettingOptionsItemIcon} />
          <Text style={styles.bodySettingOptionsItemText}>Help</Text>
          <IconBack style={styles.bodySettingOptionsItemIconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <IconHome />
          <Text style={styles.footerItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('FollowingList')}>
          <IconHeart />
          <Text style={styles.footerItemText}>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <IconMessenger />
          <Text style={styles.footerItemText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <IconInfo />
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

export {Page7};
