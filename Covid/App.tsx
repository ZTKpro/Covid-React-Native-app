import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import CreatedBy from "./assets/Components/createdBy";

const navItems = [
  { text: "Statistics", Link: "aaa" },
  { text: "How to care?", Link: "aaa" },
  { text: "I have corona. What do now?", Link: "aaa" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.header} source={require("./assets/header.svg")} />
      <View style={styles.bottom}>
        <Text style={styles.h1}>Covid</Text>
        <View style={styles.navItemBox}>
          {navItems.map((item) => {
            return (
              <View style={styles.navItem}>
                <Text style={styles.navItemText}>{item.text}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <CreatedBy></CreatedBy>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
  },
  h1: {
    fontSize: "31px",
    fontWeight: "600",
    marginBottom: "10px",
    textAlign: "center",
    color: "#707070",
  },
  header: {
    width: "100%",
    height: 240,
  },
  bottom: {
    marginTop: 25,
    height: "100%",
    width: "100%",
    backgroundColor: "#F9F9F9",
  },
  navItemBox: { marginTop: 25 },
  navItem: {
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
    width: "90vw",
    padding: 28,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
    shadowColor: "#00000080",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  navItemText: {
    fontSize: 22,
    color: "#707070",
  },
});
