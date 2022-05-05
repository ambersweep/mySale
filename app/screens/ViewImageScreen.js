import React from "react";
import { Platform, TouchableHighlight, View, Button, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../config/colors"

function ViewImageScreen(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.closeButton}>
            <TouchableHighlight>
          <Icon.Button name="close-outline" style={styles.icon}/>
          </TouchableHighlight>
        </View>
        <View style={styles.deleteButton}>
          <Icon.Button name="trash" backgroundColor="tomato" style={styles.icon}/>
        </View>
        <Image
          style={styles.image}
          source={require("../assets/clothes.jpg")}
        ></Image>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    bottom: -15,
    right: 50,
    alignSelf: "flex-end",
  },
  deleteButton: {
    bottom: 20,
    left: 50,
    alignSelf: "flex-start",
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
  },
  icon:{
   marginRight:-10,
  },
  image: {
    width: "100%",
    height: "75%",
    alignSelf: "center",
  },
});

export default ViewImageScreen;
