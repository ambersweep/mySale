import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

import colors from "../config/colors.js";

function WelcomeScreen(props) {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      ></ImageBackground>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
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
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
});
export default WelcomeScreen;
