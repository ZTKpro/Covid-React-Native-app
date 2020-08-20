import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

const Arrow = require("../../assets/Arrow.svg");
const SocialDis = require("../../assets/social-distancing.png");

const Step1 = require("../../assets/clean-1.png");
const Step2 = require("../../assets/clean-2.png");
const Step3 = require("../../assets/clean-3.png");
const Step4 = require("../../assets/clean-4.png");
const Step5 = require("../../assets/clean-5.png");
const Step6 = require("../../assets/clean-6.png");

interface IPropsdisplayInstruction {
  ToggleFun: () => void;
}

export default function displayInstruction(Props: IPropsdisplayInstruction) {
  const instructionStep = [
    {
      Img: Step1,
      Text: "Wet hands with water, apply soap and rub hands palm-to-palm",
    },
    {
      Img: Step2,
      Text: "Rub back of each hand with opposite palm",
    },
    {
      Img: Step3,
      Text: "Rub fingertips in opposite palms to wash under nails",
    },
    {
      Img: Step4,
      Text: "Rub between fingers",
    },
    {
      Img: Step5,
      Text: "Rub each finger, thumb clasped in opposite hand",
    },
    {
      Img: Step6,
      Text: "Scrub wrists",
    },
  ];
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          Props.ToggleFun();
        }}
      >
        <Image source={Arrow} style={styles.arrow}></Image>
      </TouchableHighlight>
      <View style={styles.mapWrapper}>
        <Text style={styles.itemTittle}>Hand washing</Text>
        {instructionStep.map((item, i) => (
          <View>
            <Image style={styles.itemImg} source={item.Img}></Image>
            <Text style={styles.itemText}>{item.Text}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.itemTittle}>Mask</Text>
      <Text style={styles.itemText}>
        Wearing mask of the time when you go outside or you have contact with
        strange people
      </Text>
      <Text style={styles.itemTittle}>Social distancing</Text>
      <Image style={styles.itemImgSocial} source={SocialDis}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#F9F9F9",
    position: "relative",
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
  arrow: {
    position: "absolute",
    left: 5,
    top: 30,
    height: 35,
    width: 30,
    padding: 15,
    textAlign: "left",
    marginLeft: 25,
  },
  mapWrapper: {
    marginTop: 70,
  },
  itemTittle: {
    marginTop: 40,
    paddingLeft: 30,
    fontSize: 32,
    opacity: 0.9,
  },
  itemText: {
    paddingLeft: 30,
    fontSize: 20,
    opacity: 0.85,
    width: "90%",
    marginTop: 10,
  },
  itemImg: {
    marginTop: 35,
    height: 90,
    width: 150,
    marginLeft: 30,
  },
  itemImgSocial: {
    marginTop: 35,
    height: 150,
    width: 300,
    marginLeft: 30,
    marginBottom: 100,
  },
});
