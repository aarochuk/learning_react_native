import { View, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // adds shadow on android but not ios
    shadowColor: "black", // adds shadow on ios but not android
    shadowOffset: { width: 0, height: 2 }, // also necessary for ios shadow
    shadowRadius: 6, // also necessary for ios shadow
    shadowOpacity: 0.25, // also necessary for ios shadow
  },
});
