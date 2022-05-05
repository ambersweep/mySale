import React from "react";
import { TouchableHighlight, View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <>
      <View style={styles.container}>
        <View>
          <TouchableHighlight>
            <MaterialIcons
              name="close"
              style={styles.closeButton}
              size={30}
              color="white"
            />
          </TouchableHighlight>
          <TouchableHighlight>
            <MaterialIcons
              name="delete-outline"
              style={styles.deleteButton}
              size={30}
              color="white"
            />
          </TouchableHighlight>
        </View>
        <View style={styles.deleteButton}></View>
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
    position: "absolute",
    paddingRight: 20,
    bottom: 20,
    alignSelf: "flex-end",
    backgroundColor: colors.black,
  },
  deleteButton: {
    position: "absolute",
    paddingLeft: 20,
    bottom: 20,
    alignSelf: "flex-start",
    backgroundColor: colors.black,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "75%",
    alignSelf: "center",
  },
});

export default ViewImageScreen;
