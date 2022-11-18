import { Image, StyleSheet, Text, View } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={props.image} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    height: 350,
    flex: 1,
    alignSelf: "flex-start",
    flexDirection: "column",
    borderRadius: 20,
    margin: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },

  image: {
    resizeMode: "contain",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    height: "80%",
  },

  title: {
    paddingVertical: 10,
  },
  subtitle: {
    color: "green",
  },
});

export default Card;
