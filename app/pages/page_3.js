import React, {useState, useEffect} from 'react';
import {View, Text, Button, PermissionsAndroid, Platform} from 'react-native';
// import {RNCamera} from 'react-native-camera'; 

function CameraScreen() {
  const [cameraPermission, setCameraPermission] = useState(false);

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const checkCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Kamera-Berechtigung',
          message:
            'Diese App benötigt Zugriff auf Ihre Kamera, um Fotos aufzunehmen.',
          buttonNeutral: 'Später',
          buttonNegative: 'Abbrechen',
          buttonPositive: 'Zulassen',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setCameraPermission(true);
      } else {
        setCameraPermission(false);
      }
    }
  };

  const openCamera = async () => {
    if (cameraPermission) {
      // Öffnen Sie die Kamera hier
    } else {
      // Zeigen Sie dem Benutzer, dass die Kameraberechtigung erforderlich ist
      alert(
        'Kameraberechtigung erforderlich. Bitte gewähren Sie die Berechtigung in den Einstellungen.',
      );
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Camera Screen</Text>
      <Button title="Kamera öffnen" onPress={openCamera} />
    </View>
  );
}

export default CameraScreen;
