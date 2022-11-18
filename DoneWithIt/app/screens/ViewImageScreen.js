import { View, StyleSheet, Image, SafeAreaView } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.topBar}>
        <View style={style.close}>
          <MaterialCommunityIcons name="close" size={32} color="white" />
        </View>
        <View style={style.delete}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={32}
            color="white"
          />
        </View>
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
    position: "absolute",
    top: 40,
    left: 30,
  },

  delete: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
