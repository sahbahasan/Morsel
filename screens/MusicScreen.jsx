import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { albumCovers } from "../data/albumCovers";
import { newAlbums } from "../data/newAlbums";
import AlbumCoverItem from "../components/AlbumCoverItem";
import CarouselItemsSmall from "../components/CarouselItemsSmall";
import SectionHeader from "../components/SectionHeader";
import { Dimensions } from "react-native";

function renderAlbumCovers(itemData) {
  return <AlbumCoverItem imageUri={itemData.item.imageUri} />;
}

function renderCarouselItems(itemData) {
  return (
    <CarouselItemsSmall
      imageUri={itemData.item.imageUri}
      title={itemData.item.name}
      artist={itemData.item.artist}
      carouselItemSmallContainer={styles.carouselItemSmallContainer}
      carouselItemSmallImage={styles.carouselItemSmallImage}
      titleStyle={styles.titleStyle}
      artistStyle={styles.artistStyle}
      lastCarouselItemContainer={styles.lastCarouselItemContainer}
      index={itemData.index}
      length={newAlbums.length - 1}
    />
  );
}

const MusicScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient
        colors={[
          "#658abd",
          "#658abd",
          "#658abd",
          "#658abd",
          "#6e82b0",
          "#6e82b0",
          "#737eaa",
          "#7d769d",
          "#847094",
          "#8d6887",
          "#856584",
          "#655677",
        ]}
        style={{ flex: 1, paddingBottom: 70 }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Discover</Text>
          <Feather
            name="search"
            size={24}
            color="#fff"
            style={styles.headerIconStyle}
            onPress={() => navigation.navigate("Notifications")}
          />
          {/* <Ionicons
          name="notifications-sharp"
          size={24}
          color="#fff"
          style={styles.headerIconStyle}
          onPress={() => navigation.navigate("Notifications")}
        /> */}
        </View>
        <View style={styles.albumCarouselContainer}>
          <FlatList
            renderItem={renderAlbumCovers}
            data={albumCovers}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          ></FlatList>
        </View>
        <View>
          <SectionHeader title="New Albums" />
          <View style={styles.carouselContainer}>
            <FlatList
              renderItem={renderCarouselItems}
              data={newAlbums}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            ></FlatList>
          </View>
        </View>
        <View>
          <SectionHeader title="Recommended Playlist" />
          <View style={styles.carouselContainer}>
            <FlatList
              renderItem={renderCarouselItems}
              data={newAlbums}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            ></FlatList>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 37,
    color: "#f1f4fa",
    marginVertical: 0,
  },
  headerIconStyle: {
    //color: "#d5e3f5",
    color: "#b5b7d3",
    marginTop: 10,
  },
  albumCarouselContainer: {
    height: 350,
    paddingVertical: 25,
    //backgroundColor: "red",
  },
  carouselContainer: {
    height: 160,
    //backgroundColor: "red",
    marginEnd: 20,
    marginStart: 20,
    marginVertical: 15,
    marginBottom: 18,
  },

  carouselItemSmallContainer: {
    //height: 50,
    //borderRadius: 10,
    //backgroundColor: "blue",
    marginRight: 20,
  },
  carouselItemSmallImage: {
    height: 115,
    width: 115,
    borderRadius: 10,
  },
  titleStyle: {
    color: "#d2d3de",
    marginTop: 4,
    fontWeight: "700",
  },
  artistStyle: {
    color: "#d2d3de",
    fontSize: 11,
  },
  lastCarouselItemContainer: {
    marginRight: 0,
  },
});

export default MusicScreen;
