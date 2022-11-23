import { View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";

import colors from "../config/colors";

function ListItem(props) {
  return (
    <View style={styles.sellerDetails}>
      <Image style={styles.sellerImage} source={props.image} />
      <View style={styles.sellerText}>
        <AppText style={styles.sellerName}>{props.title}</AppText>
        <AppText style={styles.sellerListings}>{props.subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sellerDetails: {
    marginTop: 30,
    marginLeft: 10,
    flexDirection: "row",
  },
  sellerText: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  sellerName: {
    color: colors.black,
    paddingVertical: 5,
  },
  sellerImage: {
    height: 70,
    width: 70,
    borderRadius: 36,
  },
  sellerListings: {
    color: "grey",
  },
});

export default ListItem;
