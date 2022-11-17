import { Alert, Pressable, StyleSheet, Text } from "react-native";

function AppButton(props) {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: `${props.color}` }]}
      onPress={() => Alert.alert("Button time!")}
    >
      <Text style={styles.buttonText}>{props.children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "95%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppButton;
