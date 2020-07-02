import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.createdBy}>Created by</Text>
      <Image style={styles.logo} source={require("../Logo.svg")}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#707070",
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 20,
  },
  createdBy: {
    width: "25%",
  },
  logo: {
    height: 30,
    width: 30,
  },
});
