import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { NameInput, NameList } from "../../components";
import { NameData } from "./dummy";
import { withHome } from "../../redux/containers";
import FlashMessage from "react-native-flash-message";

const HomeScreen = (props) => {
  const onAddName = (name) => {
    const data = {
      id: new Date().getTime(),
      name,
      date: new Date(),
    };
    props.addName(data);
  };

  useEffect(() => {
    props.fetchNameListData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NameInput onAdd={onAddName} />
      <NameList data={props.nameListData} />
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

export default withHome(HomeScreen);
