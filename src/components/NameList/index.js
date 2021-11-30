import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
  useOnCellActiveAnimation,
} from "react-native-draggable-flatlist";
import moment from "moment";
import { Colors } from "../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: Colors.gray,
    height: 55,
    marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  list: {
    marginTop: 20,
  },
  separator: {
    height: 5,
  },
  dateTimeText: {
    fontSize: 11,
    textAlign: "right",
    color: Colors.gray,
  },
  text: {},
  crossedText: {
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    fontStyle: "italic",
  },
});

const NameList = ({ data }) => {
  const [crossedNames, setCrossedNames] = useState([]);

  const onPress = (itemIndex) => {
    const index = crossedNames.indexOf(itemIndex);
    if (index === -1) {
      setCrossedNames([...crossedNames, itemIndex]);
    } else {
      const updatedCrossedNames = [...crossedNames];
      updatedCrossedNames.splice(index, 1);
      setCrossedNames(updatedCrossedNames);
    }
  };

  const renderItem = ({ item, index, drag }) => {
    const { isActive } = useOnCellActiveAnimation();
    const date = new Date(item.date);
    const textStyle =
      crossedNames.indexOf(index) === -1 ? styles.text : styles.crossedText;
    return (
      <ScaleDecorator>
        <TouchableOpacity
          style={styles.itemContainer}
          onLongPress={drag}
          disabled={isActive}
          activeOpacity={0.8}
          onPress={() => onPress(index)}
        >
          <Text style={textStyle}>{item.name}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.dateTimeText}>
              {moment(date).format("hh:mm:ss")}
            </Text>
            <Text style={styles.dateTimeText}>
              {moment(date).format("DD/MM/YYYY")}
            </Text>
          </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        style={styles.list}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => `key-${item.id}`}
      />
    </View>
  );
};

export default NameList;
