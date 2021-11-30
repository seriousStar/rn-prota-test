import React from "react";
import "react-native-gesture-handler";
import { HomeScreen } from "./src/containers";
import { customConfigureStore } from "./src/redux";

export default function App() {
  const { Provider, store } = customConfigureStore();
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
