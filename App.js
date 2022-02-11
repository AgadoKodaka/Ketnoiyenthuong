import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Page1} from './src/HomePage/LoginPage';
import {Page2} from './src/HomePage/MakeNewAcc';
import {Page3} from './src/HomePage/RecoveryAcc';
import {Page4} from './src/HomePage/2faAuth';
import {Page5} from './src/HomePage/PassReset';
import {Page6} from './src/Profiles/FollowingList';
import {Page7} from './src/Profiles/HomeProfile';
import {Page8} from './src/Profiles/AccSetting';
import {Page9} from './src/HomePage/VottingPage';
import {Page10} from './src/Profiles/Personalnfo';
import {Page11} from './src/Profiles/PhoneConfirmation';
import {Page12} from './src/Profiles/ConfirmationPage(Email)';
import {Page13} from './src/Profiles/NoficationSetting';
import {Page14} from './src/Profiles/2faAuth_2';
import {Page15} from './src/Profiles/EmailConfirmation';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginPage"
        component={Page1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MakeNewAccount"
        component={Page2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RecoverAccount"
        component={Page3}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F5F6F8',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="2faAuth"
        component={Page4}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F5F6F8',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="PassReset"
        component={Page5}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F5F6F8',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="FollowingList"
        component={Page6}
        options={{
          title: 'Trần Trung Giới',
          headerStyle: {
            backgroundColor: '#F5F6F8',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Page7}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountSetting"
        component={Page8}
        options={{
          title: 'Account Setting',
          headerStyle: {
            backgroundColor: '#F5F6F8',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="VottingPage"
        component={Page9}
        options={{
          title: 'Review',
          headerStyle: {
            backgroundColor: '#F5F6F8',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerShadowVisible: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="PersonalInfo"
        component={Page10}
        options={{
          title: 'Personal Informations',
          headerStyle: {
            backgroundColor: '#F5F6F8',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerShadowVisible: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="PhoneConfirmation"
        component={Page11}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F5F6F8',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerShadowVisible: true,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="NofiSetting"
        component={Page13}
        options={{
          title: 'Nofication Setting',
          headerStyle: {
            backgroundColor: '#F5F6F8',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="2faAuth_2"
        component={Page14}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F5F6F8',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="EmailInput"
        component={Page15}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F5F6F8',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
