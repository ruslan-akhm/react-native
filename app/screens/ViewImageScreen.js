import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.icons, styles.closeIcon]}></View>
      <View style={[styles.icons, styles.deleteIcon]}></View>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1486946255434-2466348c2166?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
        }}
        style={styles.img}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: colors.primary,
    position: "absolute",
    top: 20,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 20,
    right: 30,
  },
  icons: {
    width: 40,
    height: 40,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
