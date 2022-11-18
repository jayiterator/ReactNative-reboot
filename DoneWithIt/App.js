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
import Card from "./app/components/Card/Card";
import ListingDetails from "./app/screens/ListingDetails";

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
    >
      {/* <Card
        title="Red Jacket for sale!"
        subtitle="$100"
        image={require("./app/assets/jacket.jpg")}
      /> */}
      {/* <ListingDetails title="Red Jacket for sale!" subtitle="$100" /> */}
      <ViewImageScreen />
    </SafeAreaView>
  );
}
