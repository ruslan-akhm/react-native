//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Button,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  // const { landscape } = useDeviceOrientation();
  // const handlePress = () => {
  //   console.log("Press!");
  // };
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({});
