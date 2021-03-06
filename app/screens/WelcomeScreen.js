import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";
import WelcomeButton from "../components/WelcomeButton.js";

function WelcomeScreen(props) {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
        blurRadius={10}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
        <View>
          <WelcomeButton title="login" onPress={()=> alert('button pressed')}/>
          <WelcomeButton title="register" color="primary" onPress={()=> alert('button pressed')}/>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
  },
  logo: {
    width: "100%",
    height: "60%",
    aspectRatio: 2.7,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: 70,
    alignItems: "center",
  },
});
export default WelcomeScreen;
