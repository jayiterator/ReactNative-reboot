//rsf - react stateless function

import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Alert,
} from "react-native";
import styles from "../components/AppText/styles";
import AppButton from "../components/Button/Button";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      source={require("../assets/background.jpg")}
      style={style.background}
    >
      <View style={style.logoText}>
        <Image source={require("../assets/logo-red.png")} style={style.logo} />
        <Text style={style.text}>Sell What You Don't Need</Text>
      </View>
      <View style={style.buttons}>
        <AppButton onPress={() => Alert.alert("Tapped.")} color="#fc5c65">
          LOGIN
        </AppButton>
        <AppButton onPress={() => Alert.alert("Tapped.")} color="#4ECDC4">
          REGISTER
        </AppButton>
      </View>
    </ImageBackground>
  );
}

// rnss - Style sheet

const style = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },

  logoText: {
    position: "absolute",
    marginTop: 70,
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },

  text: {
    height: 100,
    fontSize: 25,
    fontWeight: "600",
  },

  buttons: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    flex: "1",
  },
});
