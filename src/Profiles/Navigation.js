import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Page7} from './HomeProfile';
import {Page8} from './AccSetting';
import {Page9} from '../HomePage/VottingPage';
import {Page10} from './Personalnfo';
import {Page11} from './PhoneConfirmation';
import {Page12} from './ConfirmationPage(Email)';
import {Page13} from './NoficationSetting';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilePage"
        component={Page7}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountSetting"
        component={Page8}
        options={{title: 'Account Setting'}}
      />
      <Stack.Screen
        name="Votting Page"
        component={Page9}
        options={{title: 'Review'}}
      />
      <Stack.Screen
        name="Personalnfo"
        component={Page10}
        options={{title: 'Personal Info'}}
      />
      <Stack.Screen
        name="PhoneConfirmation"
        component={Page11}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="NotificationSetting"
        component={Page13}
        options={{
          title: 'Nofication Setting',
        }}
      />
    </Stack.Navigator>
  );
}
const Page6 = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
export {Page6};
