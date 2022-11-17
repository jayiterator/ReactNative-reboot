import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ViewComponent,
  Text,
} from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "400",
          color: "tomato",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 40,
        }}
      >
        I Love React Native! This is not my first React Native App! Here is more
        Text.
      </Text>
    </View>
  );
}
