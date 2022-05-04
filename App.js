import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, TouchableWithoutFeedback} from 'react-native';

export default function App() {
  console.log("App Executed")
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => console.log("text pressed")}>Hello React Native! test</Text>
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
      }} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
