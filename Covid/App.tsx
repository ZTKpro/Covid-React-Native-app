import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.h1}>
        Covid
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
  },
  h1: {
    color: "#707070",
    fontSize: "31px",
    fontWeight: "600",
    marginBottom: "10px",
    textAlign: "center",
  },
});
