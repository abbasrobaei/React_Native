// App.js
// In App.js in a new project
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from './pages/Home';
// import Button_Page from './pages/Button_Page';
// import Page_1 from './pages/Page_1';
import AppNavigator from './AppNavigator';

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
