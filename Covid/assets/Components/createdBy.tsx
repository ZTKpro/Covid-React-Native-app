import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Created by</Text>
      <Image style={styles.logo} source={require("../Logo.svg")}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#707070",
    display: "flex",
    width: "100%",
    borderWidth: 4,
    borderColor: "red",
  },
  logo: {
    height: 30,
    width: 30,
  },
});
