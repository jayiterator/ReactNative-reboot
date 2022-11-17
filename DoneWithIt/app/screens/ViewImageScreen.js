import { View, StyleSheet, Image, SafeAreaView } from "react-native";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.topBar}>
        <View style={style.close} />
        <View style={style.delete} />
      </View>
      <Image source={require("../assets/chair.jpg")} style={style.mainImage} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors.black,
  },

  topBar: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  mainImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    flex: 8,
  },

  close: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },

  delete: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
});
