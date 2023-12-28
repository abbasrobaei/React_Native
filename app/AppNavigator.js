/* eslint-disable react/no-unstable-nested-components */

/* eslint-disable react-native/no-inline-styles */
// AppNavigator.js
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Button_Page from './pages/Button_Page';
import Page_1 from './pages/Page_1';
import Page_2 from './pages/Page_2';
import {Image} from 'react-native';
// import styles from './src/css/styles';
// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Button_Page" component={Button_Page} />
    <Tab.Screen
      name="Page_1"
      component={Page_1}
      options={{
        tabBarLabel: '',
        tabBarIcon: props => {
          if (props.focused) {
            return (
              <Image
                style={{
                  height: props.size,
                  width: props.size,
                  tintColor: '#5177A9',
                }}
                source={require('./src/img/React-icon.svg.png')}
              />
            );
          } else {
            return (
              <Image
                style={{
                  top: -20,
                  height: props.size,
                  width: props.size,
                  tintColor: '#A8A89C',
                }}
                source={require('./src/img/React-icon.svg.png')}
              />
            );
          }
        },
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Page_1" component={Page_1} />
      <Stack.Screen name="Page_2" component={Page_2} />
      <Stack.Screen name="Button_Page" component={Button_Page} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
