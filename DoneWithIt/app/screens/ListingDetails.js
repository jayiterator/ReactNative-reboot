import { StyleSheet, View, Image, Text } from "react-native";

function ListingDetails(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
      <View style={styles.sellerDetails}>
        <Image
          style={styles.sellerImage}
          source={require("../assets/mosh.jpg")}
        />
        <View style={styles.sellerText}>
          <Text style={styles.sellerName}>Mosh Hamedani</Text>
          <Text style={styles.sellerListings}>5 Listings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    flex: 1,
    padding: 10,
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
  },
  subtitle: {
    color: "green",
  },
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
    paddingVertical: 5,
  },
  sellerImage: {
    height: 70,
    width: 70,
    borderRadius: 36,
  },
  sellerListings: {
    color: "dark-grey",
  },
});

export default ListingDetails;
