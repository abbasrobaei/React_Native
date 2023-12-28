/* eslint-disable no-unused-vars */

import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {useNavigation} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from '../src/css/styles';
// import Button_Page from '../pages/Button_Page';
// import Page_1 from '../pages/Page_1';

// import {useNavigation} from '@react-navigation/native';
// const Button_Page = require('../pages/Button_Page');
// const Page_1 = require('../pages/Page_1');
const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/440px-React-icon.svg.png';

const Home = ({navigation}) => {
  return (
    <>
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <View style={styles.container}>
        {/* <Image source={{uri: imageUrl}} style={styles.image} /> */}
        <Text style={styles.text}>Hallo, React Native!</Text>
        <Button
          // onPress={gotoButtonPage}
          onPress={() => navigation.navigate('Button_Page')}
          title="Go to Button_Page"
          // onPress={() => Alert.alert('Simple Button pressed')}
          color="#841584"
          accessibilityLabel="Button_Page"
        />
        <Button
          // onPress={gotoButtonPage}
          onPress={() => navigation.navigate('Page_2')}
          title="Go to Page_2"
          // onPress={() => Alert.alert('Simple Button pressed')}
          color="#841584"
          accessibilityLabel="Page_2"
        />
      </View>
    </>
  );
};

export default Home;
