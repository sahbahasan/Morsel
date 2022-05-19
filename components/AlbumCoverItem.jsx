import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AlbumCoverItem = ({ imageUri }) => {
  return (
    <View style={styles.albumItemContainer}>
      <Image source={imageUri} style={styles.albumImage}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  albumItemContainer: {
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 20,
  },
  albumImage: {
    height: 350,
    width: windowWidth * 0.75,
  },
});

export default AlbumCoverItem;
