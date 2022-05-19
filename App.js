import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import NotificationScreen from "./screens/NotificationScreen";

import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { colors } from "./constants/colors";
import MusicScreen from "./screens/MusicScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "DM-serif-regular": require("./assets/fonts/DMSerifDisplay-Regular.ttf"),
    "DeathNote": require("./assets/fonts/DEATHNOTEFont.ttf"),
  });
};

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeScreenTabNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#3e3d52",
          //backgroundColor: "#00000023",
          elevation: 0,
          position: "absolute",
          borderTopColor: "#6f6683",
          blurRadius: 5,
          height: 70,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.tabTintColor,
        tabBarBackground: () => (
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            //colors={["#3e3d52", "#595465", "#5f5869", "#3e3d52"]}
            colors={["#3e3d5259", "#5954654d", "#5f58693d", "#3e3d5233"]}
            style={{
              height: 70,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="camera" size={35} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Music"
        component={MusicScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-musical-note-sharp" size={24} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
};

const StackScreens = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreenTabNavigator}
        options={{
          headerRight: () => (
            <Ionicons
              name="notifications-sharp"
              size={24}
              color="#fff"
              onPress={() => navigation.navigate("Notifications")}
            />
          ),
          headerTransparent: true,
          headerShown: false,
        }}
      />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
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
    // <View style={styles.container}>
    //   <ImageBackground
    //     source={require("./assets/Images/purple_bg.jpg")}
    //     style={styles.backgroungImg}
    //   >
    //     <LinearGradient
    //       colors={[
    //         "rgba(255, 255, 255, 0.49)",
    //         "rgba(0, 0, 0, 0.39)",
    //         "rgba(0, 0, 0, 0.59)",
    //         "rgba(0, 0, 0, 0.79)",
    //       ]}
    //       style={{ flex: 1, justifyContent: "center" }}
    //     ></LinearGradient>
    //     <Text style={styles.welcomeText}>WELCOME TO MORSEL</Text>
    //   </ImageBackground>
    //   <StatusBar style="auto" />
    // </View>
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//     marginTop: 30,
//   },
//   backgroungImg: {
//     width: "100%",
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   welcomeText: {
//     fontSize: 28,
//     color: "#fff",
//     fontFamily: "DM-serif-regular",
//   },
// });
