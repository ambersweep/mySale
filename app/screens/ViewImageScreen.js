import React from "react";
import {
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.closeButton}>
          <TouchableHighlight>
          <Icon name="close-outline" size={35} color="white" />
          </TouchableHighlight>
        </View>
        <View style={styles.deleteButton}>
          <TouchableHighlight>
          <Icon name="trash" size={30} color="white" />
          </TouchableHighlight>
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
    bottom: 25,
    right: 50,
    alignSelf: "flex-end",
    backgroundColor: colors.black,
  },
  deleteButton: {
    bottom:60,
    left: 50,
    alignSelf: "flex-start",
    backgroundColor: colors.black,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    marginRight: -10,
  },
  image: {
    width: "100%",
    height: "75%",
    alignSelf: "center",
  },
});

export default ViewImageScreen;
