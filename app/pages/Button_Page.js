/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from '../src/css/styles';
// import Home from '../../app/pages/Home';

// import react_native_img from './src/img/React-icon.svg.png';
const react_native_img = require('../src/img/React-icon.svg.png');
const HomeStack = createNativeStackNavigator();
const Button_PageStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Button_Page = ({navigation}) => {
  //   handlelogin = () => {
  //     console.log(props);
  //   };
  return (
    <>
      <View
        style={{
          maxWidth: 300,
          backgroundColor: 'yellow',
          alignItems: 'center',
          alignSelf: 'center',
          width: '100%',
        }}>
        <Text style={styles.TextOne}>hello</Text>
        <Text style={styles.TextTwo}>hallo tow</Text>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/440px-React-icon.svg.png',
          }}
          style={{width: 100, height: 100}}
          resizeMode="contain"
          blurRadius={10}
        />
        <Image source={react_native_img} style={{width: 100, height: 100}} />
        <Button
          title="Simple"
          onPress={() => Alert.alert('Simple')}
          color="#841584"
          // accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View>
        <Button
          // onPress={onPressLearnMore}
          onPress={() => navigation.navigate('Home')}
          title="Home Button"
          // onPress={() => Alert.alert('Simple Button pressed')}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </>
  );
};
export default Button_Page;
