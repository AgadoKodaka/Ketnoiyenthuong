import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Page1} from './src/HomePage/LoginPage';
import {Page2} from './src/HomePage/MakeNewAcc';
import {Page3} from './src/HomePage/RecoveryAcc';
import {Page4} from './src/HomePage/2faAuth';
import {Page5} from './src/HomePage/PassReset';

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
