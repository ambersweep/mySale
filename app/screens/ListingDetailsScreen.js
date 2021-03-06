import { ListItem } from "@rneui/themed";
import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import UserDetail from "../components/UserDetail";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/leather-boots.jpg")}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Leather Boots</Text>
        <Text style={styles.price}>$150</Text>
        <View style={styles.userContainer}>
          <UserDetail user="AC" title="Amber C" subTitle="3 listings" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;
