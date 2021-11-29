import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";

const styles = StyleSheet.create({
  inputText: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    height: 40,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  addBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    marginLeft: 10,
  },
});

const NameInput = ({ onAdd }) => {
  const [name, setName] = useState("");
  const onPress = () => {
    const trimmedName = name.trim();
    if (trimmedName === "") {
      return showMessage({
        message: "Please try again with the valid name.",
        description: "You're trying to add the blank name.",
        type: "danger",
        hideOnPress: true,
      });
    }
    onAdd(trimmedName);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Add new baby name"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.addBtn} onPress={onPress}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NameInput;
