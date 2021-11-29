import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { NameInput } from "../../components";

const HomeScreen = () => {
  const onAddName = (name) => alert(name);

  return (
    <SafeAreaView style={styles.container}>
      <NameInput onAdd={onAddName} />
    </SafeAreaView>
  );
};

export default HomeScreen;
