import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: '#72063c',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // adds shadow on android but not ios
    shadowColor: 'black', // adds shadow on ios but not android
    shadowOffset: {width: 0, height: 2}, // also necessary for ios shadow
    shadowRadius: 6, // also necessary for ios shadow
    shadowOpacity: 0.25, // also necessary for ios shadow
  },
});
