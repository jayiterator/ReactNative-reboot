import { StyleSheet, View, Image, Text } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetails(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <AppText style={styles.title}>{props.title}</AppText>
      <AppText style={styles.subtitle}>{props.subtitle}</AppText>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subtitle="5 Listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    flex: 1,
    paddingBottom: 10,
  },

  image: {
    resizeMode: "contain",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    height: "35%",
  },

  title: {
    paddingVertical: 10,
    color: colors.black,
    paddingHorizontal: 10,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});

export default ListingDetails;
