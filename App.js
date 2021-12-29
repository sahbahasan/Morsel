import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { LinearGradient } from 'expo-linear-gradient';

const fetchFonts = () => {
  return Font.loadAsync({
    "DM-serif-regular": require("./assets/fonts/DMSerifDisplay-Regular.ttf"),
    "DeathNote": require("./assets/fonts/DEATHNOTEFont.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <View style={styles.container}>
          <ImageBackground
            source={require("./assets/Images/purple_bg.jpg")}
            style={styles.backgroungImg}
          >
            <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0, 0, 0, 0.79)", "rgba(0, 0, 0, 0.49)", "rgba(0, 0, 0, 0.69)", "rgba(0, 0, 0, 0.89)"]}
        style={styles.background}
        >
            <View style={styles.backgroundView}>
              <Text style={styles.welcomeText}>MORSEL</Text>
            </View>
            
        </LinearGradient>
          </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  backgroungImg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundView: {
    width: "100%",
    height: "100%",
    marginRight: 150,
    marginLeft: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 48,
    color: "#fff",
    fontFamily: "DeathNote",
  },
  Logo: {
    width: 60,
    height: 60,
    marginHorizontal: 20,
    marginLeft: 25
  }
});
