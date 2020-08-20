import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

interface ToggleProps {
  ToggleFun: () => void;
}

export default function Stats(Props: ToggleProps) {
  const [death, setDeath] = useState(0);
  const [newRec, setNewRec] = useState(0);
  const [confirmed, setConfirmed] = useState(0);
  const [ratio, setRatio] = useState(0);
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((Res) => Res.json())
      .then((resJson) => {
        setDeath(resJson.Global.TotalDeaths);
        setNewRec(resJson.Global.NewRecovered);
        setConfirmed(resJson.Global.TotalConfirmed);
        setRatio(
          (resJson.Global.TotalDeaths / resJson.Global.TotalConfirmed) * 100
        );
      })
      .catch(console.log);
  });
  const StatsItems = [
    { text: "Cases", number: newRec },
    { text: "Recoverd", number: confirmed },
    { text: "Deaths", number: death },
    { text: "Death ratio", number: ratio, procent: true },
  ];

  const checkColor = (e: any) => {
    if (e.text.toUpperCase() == "DEATHS") {
      return styles.statsRed;
    } else if (e.text.toUpperCase() == "RECOVERD") {
      return styles.statsGreen;
    } else {
      return styles.stats;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          Props.ToggleFun();
        }}
        underlayColor="white"
      >
        <View style={styles.close}></View>
      </TouchableHighlight>
      {StatsItems.map((item) => (
        <View key={item.text} style={styles.statsItem}>
          <Text style={styles.statsText}>{item.text}</Text>
          <Text style={checkColor(item)}>
            {item.text.toUpperCase() == ""
              ? Math.round(item.number)
              : item.number.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
            {item.procent ? "%" : ""}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    bottom: 0,
    height: "80vh",
    width: "100vw",
    backgroundColor: "#F9F9F9",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 4,
  },
  close: {
    height: "6px",
    width: "45px",
    backgroundColor: "#8D8787",
    margin: "30px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 4,
  },
  statsItem: {
    backgroundColor: "#FFFFFF",
    marginBottom: 30,
    width: "90vw",
    padding: 20,
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
  statsText: {
    fontSize: 20,
  },
  stats: {
    fontSize: 30,
  },
  statsRed: {
    fontSize: 30,
    color: "red",
  },
  statsGreen: {
    fontSize: 30,
    color: "lightgreen",
  },
});
