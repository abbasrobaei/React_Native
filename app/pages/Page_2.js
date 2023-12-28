import React from 'react';
import {View, Button, Alert} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
// import {RNCamera} from 'react-native-camera';

const App = () => {
  const checkCameraPermission = async () => {
    const result = await check(PERMISSIONS.IOS.CAMERA);

    switch (result) {
      case RESULTS.GRANTED:
        console.log('Die Kameraberechtigung wurde erteilt.');
        openCamera();
        break;
      case RESULTS.DENIED:
        const newResult = await request(PERMISSIONS.IOS.CAMERA);
        if (newResult === RESULTS.GRANTED) {
          openCamera();
        }
        break;
      case RESULTS.BLOCKED:
        Alert.alert(
          'Berechtigung erforderlich',
          'Bitte erlauben Sie den Zugriff auf die Kamera in Ihren Einstellungen.',
        );
        break;
    }
  };

  const openCamera = () => {
    // Implementieren Sie hier die Logik zum Öffnen der Kamera
    console.log('Kamera wird geöffnet...');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Kamera öffnen" onPress={checkCameraPermission} />
    </View>
  );
};

export default App;
