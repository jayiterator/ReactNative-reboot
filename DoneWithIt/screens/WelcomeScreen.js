import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ImageBackground } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={style.background}
      />
      <View style={style.login} />
      <View style={style.register} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    width: "100%",
    height: "100%",
    flex: 10,
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
