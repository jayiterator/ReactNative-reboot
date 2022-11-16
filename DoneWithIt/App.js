import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ImageBackground } from "react-native";

export default function App() {
  return (
    // <View
    //   style={{
    //     backgroundColor: "white",
    //     flex: 1,
    //     flexDirection: "row", //horizontal
    //     justifyContent: "center", //primary axis
    //     alignItems: "center", //secondary axis
    //     alignContent: "center", //only works with wrapping
    //     // flexWrap: "wrap", //wraps so shapes don't overflow
    //   }}
    // >
    //   <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       width: 100,
    //       height: 100,
    //     }}
    //   />
    //   <View
    //     style={{
    //       backgroundColor: "gold",
    //       width: 100,
    //       height: 100,
    //     }}
    //   />
    //   <View
    //     style={{
    //       backgroundColor: "tomato",
    //       width: 100,
    //       height: 100,
    //     }}
    //   />
    // </View>
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
