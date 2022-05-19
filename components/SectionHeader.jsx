import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.pseudo}></View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <AntDesign name="right" size={24} color="#b5b7d3" />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    width: windowWidth * 1,
    paddingHorizontal: 20,

    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderLeftWidth: 5,
    // borderLeftColor: "blue",
    // marginLeft: 20,
    // borderBottomLeftRadius: 4,
    // borderTopLeftRadius: 4,
  },
  titleContainer: {
    flexDirection: "row",
  },
  pseudo: {
    backgroundColor: "#fbc6bc",
    width: 4,
    marginRight: 12,
    borderRadius: 15,
  },
  title: {
    color: "#ced0e9",
    fontSize: 19,
  },
});

export default SectionHeader;
