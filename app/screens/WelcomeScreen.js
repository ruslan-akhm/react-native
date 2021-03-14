import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={{
        uri:
          "https://images.unsplash.com/photo-1486946255434-2466348c2166?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
      }}
      style={styles.background}
    >
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
        <Text style={styles.logotext}>Test app!</Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.signupBtn}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoBox: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logotext: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  signupBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
