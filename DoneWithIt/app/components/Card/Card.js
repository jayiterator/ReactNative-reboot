import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppText";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={props.image} />
      <AppText style={styles.title}>{props.title}</AppText>
      <AppText style={styles.subtitle}>{props.subtitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    height: 350,
    flex: 1,
    alignSelf: "flex-start",
    flexDirection: "column",
    borderRadius: 20,
    margin: 20,
    paddingBottom: 10,
    overflow: "hidden",
  },

  image: {
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    height: "80%",
  },

  title: {
    color: colors.black,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});

export default Card;
