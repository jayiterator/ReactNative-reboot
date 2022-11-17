//rsf - react stateless function

import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";
import styles from "../components/AppText/styles";
import AppButton from "../components/Button/Button";

export default function WelcomeScreen() {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={style.background}
      >
        <View style={style.logoText}>
          <Image
            source={require("../assets/logo-red.png")}
            style={style.logo}
          />
          <Text style={style.text}>Sell What You Don't Need</Text>
        </View>
        <View style={style.buttons}>
          <AppButton style={style.login} color="#fc5c65">
            LOGIN
          </AppButton>
          <AppButton style={style.register} color="#4ECDC4">
            REGISTER
          </AppButton>
        </View>
      </ImageBackground>
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
    alignItems: "center",
  },

  logoText: {
    position: "absolute",
    marginTop: 100,
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },

  text: {
    width: 100,
    height: 100,
    fontSize: 18,
    fontWeight: "bold",
  },

  buttons: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    flex: "1",
  },
});
