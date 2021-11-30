import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Colors, Metrics } from "../../themes";

const styles = StyleSheet.create({
  inputText: {
    flex: 1,
    paddingHorizontal: Metrics.space.sm,
  },
  inputContainer: {
    flexDirection: "row",
    height: 40,
    marginHorizontal: Metrics.space.sm,
    borderRadius: 5,
    borderWidth: 1,
  },
  addBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    marginLeft: Metrics.space.sm,
  },
});

const NameInput = ({ onAdd }) => {
  const [name, setName] = useState("");

  const onPress = () => onAdd(name);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Add new baby name"
        value={name}
        placeholderTextColor={Colors.gray}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.addBtn} onPress={onPress}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NameInput;
