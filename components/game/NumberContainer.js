import { View, StyleSheet,Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function NumberContainer({ children }) {
  return (
    <View styles={styles.container}>
      <Text styles={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.accent500,
    borderWidth: 4,
    padding: 12,
    margin: 24,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
    // fontWeight: "bold",
  },
});
