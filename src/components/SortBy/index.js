import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { Colors, Metrics } from "../../themes";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Metrics.space.sm,
    marginTop: Metrics.space.sm,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  sortContainer: {
    flex: 1,
    marginLeft: Metrics.space.sm,
  },
  dropdown: {
    height: 40,
  },
  dropdownPlaceholderText: {
    color: Colors.gray,
  },
});

const SortBy = ({ options, setOption }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(options);

  const onSetValue = (updatedValue) => {
    setValue(updatedValue);
    setOption(updatedValue);
  };

  return (
    <View style={styles.container}>
      <Text>SortBy:</Text>
      <View style={styles.sortContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={onSetValue}
          setItems={setItems}
          style={styles.dropdown}
          placeholderStyle={styles.dropdownPlaceholderText}
        />
      </View>
    </View>
  );
};

export default SortBy;
