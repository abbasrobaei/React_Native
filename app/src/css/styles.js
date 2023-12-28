// styles.js

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  TextOne: {
    color: 'red',
  },
  TextTwo: {
    backgroundColor: 'blue',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 66,
    height: 58,
  },
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default styles;
