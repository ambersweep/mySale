import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton.js";

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
        <View style={styles.buttonContainer}>
          <AppButton title="login" />
          <AppButton title="register" color="primary" />
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
  buttonsContainer: {
    padding: 20,
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
