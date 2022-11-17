import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ViewComponent,
  Text,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AppText from "./app/components/AppText";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/Button/Button";

export default function App() {
  return (
    //Style for testing purposes.
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#f8f4f4",
      }}
    ></SafeAreaView>
  );
}
