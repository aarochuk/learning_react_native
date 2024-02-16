import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Please enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    props.onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonHolder}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    backgroundColor: "#3b021f",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // adds shadow on android but not ios
    shadowColor: "black", // adds shadow on ios but not android
    shadowOffset: { width: 0, height: 2 }, // also necessary for ios shadow
    shadowRadius: 6, // also necessary for ios shadow
    shadowOpacity: 0.25, // also necessary for ios shadow
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  inputHolder: {
    display: "flex",
    marginBottom: 2,
  },

  buttonHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    flex: 1,
  },
});
