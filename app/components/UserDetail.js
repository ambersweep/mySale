import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "@rneui/themed";
import colors from "../config/colors";

function UserDetail({ user, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Avatar size={64} rounded title={user} containerStyle={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: colors.primary,
  },
  container: {
    flexDirection: "row",
    marginBottom: 30,
  },
  subTitle: {
    color: colors.grey,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 10,
  },
});
export default UserDetail;
