import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import _ from "lodash";
import DraggableFlatList, {
  ScaleDecorator,
  useOnCellActiveAnimation,
} from "react-native-draggable-flatlist";
import moment from "moment";
import { Colors, Metrics } from "../../themes";
import { SortOptions } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: Colors.gray,
    height: 55,
    marginHorizontal: Metrics.space.sm,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Metrics.space.sm,
    justifyContent: "space-between",
  },
  list: {
    marginTop: Metrics.space.lg,
  },
  separator: {
    height: Metrics.space.xs,
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

const NameList = ({ data, sortBy }) => {
  const [crossedNames, setCrossedNames] = useState([]);
  const [listData, setListData] = useState(data || []);

  useEffect(() => {
    if (data) {
      onUpdateList();
    }
  }, [data, sortBy]);

  const onUpdateList = () => {
    let sortedData = [];
    switch (sortBy) {
      case SortOptions[0].value: // Alphabetical
        sortedData = _.sortBy(data, [(o) => o.name]);
        break;
      case SortOptions[1].value: // By Input Time
        sortedData = _.sortBy(data, [(o) => o.date]);
        break;
      case SortOptions[2].value: // By Length
        sortedData = _.sortBy(data, [(o) => o.name.length]);
        break;
      default:
        sortedData = data;
        break;
    }
    setListData(sortedData);
  };

  const onPress = (itemIndex) => {
    const index = crossedNames.indexOf(listData[itemIndex].id);
    if (index === -1) {
      setCrossedNames([...crossedNames, listData[itemIndex].id]);
    } else {
      const updatedCrossedNames = [...crossedNames];
      updatedCrossedNames.splice(index, 1);
      setCrossedNames(updatedCrossedNames);
    }
  };

  const onDragEnd = ({ data }) => {
    setListData(data);
  };

  const renderItem = ({ item, index, drag }) => {
    const { isActive } = useOnCellActiveAnimation();
    const date = new Date(item.date);
    const textStyle =
      crossedNames.indexOf(item.id) === -1 ? styles.text : styles.crossedText;
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
        data={listData}
        renderItem={renderItem}
        style={styles.list}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => `key-${item.id}`}
        onDragEnd={onDragEnd}
      />
    </View>
  );
};

export default NameList;
