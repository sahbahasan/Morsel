import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AlbumCoverItem = ({
  imageUri,
  carouselItemSmallContainer,
  carouselItemSmallImage,
  title,
  artist,
  titleStyle,
  artistStyle,
  length,
  index,
  lastCarouselItemContainer,
}) => {
  return (
    <View
      style={
        index !== length
          ? carouselItemSmallContainer
          : lastCarouselItemContainer
      }
    >
      <Image source={imageUri} style={carouselItemSmallImage}></Image>
      <Text style={titleStyle}>
        {title.length > 14 ? `${title.substring(0, 14)}...` : title}
      </Text>
      <Text style={artistStyle}>{artist}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   albumItemContainer: {
//     borderRadius: 20,
//     overflow: "hidden",
//     margin: 20,
//   },
//   albumImage: {
//     height: 350,
//     width: windowWidth * 0.75,
//   },
// });

export default AlbumCoverItem;
