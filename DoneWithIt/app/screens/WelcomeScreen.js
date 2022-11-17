//rsf - react stateless function

import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={style.background}
      />
      <View style={style.logoText}>
        <Image source={require("../assets/logo-red.png")} style={style.logo} />
        <Text style={style.text}>Sell What You Don't Need</Text>
      </View>
      <View style={style.login} />
      <View style={style.register} />
    </View>
  );
}

// rnss - Style sheet

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  background: {
    width: "100%",
    height: "100%",
    flex: 10,
  },

  logoText: {
    position: "absolute",
    marginTop: 100,
  },

  logo: {
    width: 100,
    height: 100,
  },

  text: {
    width: 100,
    height: 100,
  },

  login: {
    backgroundColor: "#fc5c65",
    width: "100%",
    flex: 1,
  },

  register: {
    backgroundColor: "#4ECDC4",
    width: "100%",
    flex: 1,
  },
});
