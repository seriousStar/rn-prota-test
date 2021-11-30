import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";

import { SortOptions } from "../../constants";
import { styles } from "./styles";
import { NameInput, NameList, SortBy } from "../../components";
import { NameData } from "./dummy";
import { withHome } from "../../redux/containers";
import { validateName } from "../../helpers";

const HomeScreen = (props) => {
  const [sortBy, setSortBy] = useState(null);

  const onAddName = (name) => {
    const trimmedName = name.trim();
    if (trimmedName === "") {
      return showMessage({
        message: "Please try again with the valid name.",
        description: "You're trying to add the blank name.",
        type: "danger",
        hideOnPress: true,
      });
    }
    const isValidated = validateName(trimmedName);
    if (!isValidated) {
      return showMessage({
        message: "Please try again with the valid name.",
        description:
          "Only allow names with letters and (at most) one space such as 'Sally Lou', 'Stanley', 'JoeBob Pringles'",
        type: "danger",
        hideOnPress: true,
        duration: 4000,
      });
    }
    const data = {
      id: new Date().getTime(),
      name: trimmedName,
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

      <SortBy options={SortOptions} setOption={setSortBy} />
      <NameList data={props.nameListData} sortBy={sortBy} />
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

export default withHome(HomeScreen);
