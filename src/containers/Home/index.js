import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { NameInput, NameList } from "../../components";
import { NameData } from "./dummy";

const HomeScreen = () => {
  const onAddName = (name) => alert(name);

  return (
    <SafeAreaView style={styles.container}>
      <NameInput onAdd={onAddName} />
      <NameList data={NameData} />
    </SafeAreaView>
  );
};

export default HomeScreen;
