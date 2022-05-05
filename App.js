import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, SafeAreaView, Button, TouchableWithoutFeedback} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
export default function App() {
  console.log(useDimensions())
  const {landscape} = useDeviceOrientation()
  return (
    <>
    <ViewImageScreen />
      <StatusBar style="auto" />
      </>
  );
}


