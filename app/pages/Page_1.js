/* eslint-disable no-unused-vars */
// App.js
// In App.js in a new project

import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import PushNotification from 'react-native-push-notification';
import {View, Button, Alert, Text} from 'react-native';
// import { PermissionsAndroid, Linking } from 'react-native';
// import { checkMultiple, requestMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions';

// import Home from '../pages/Home';
// import Button_Page from '../pages/Button_Page';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Page_1() {
  

    
  return (
    <View>
      <Text>Hello</Text>
      {/* <Button title="Überprüfe Camerasberechtigung" onPress={requestCameraPermission} /> */}
    </View>
  );
}

export default Page_1;


