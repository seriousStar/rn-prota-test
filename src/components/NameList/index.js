import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
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
});

const NameList = ({ data }) => {
  const renderItem = ({ item, index }) => {
    const date = new Date(item.date)
    return (
      <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
        <Text>{item.name}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateTimeText}>
            {moment(date).format("hh:mm:ss")}
          </Text>
          <Text style={styles.dateTimeText}>
            {moment(date).format("DD/MM/YYYY")}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
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
