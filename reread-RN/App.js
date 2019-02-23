// In App.js in a new project

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reflectReducer from "./redux/reducers/reducer";

const store = createStore(reflectReducer);

import Home from "./screens/Home";
import Reflect from "./screens/Reflect";

console.log("attempting to run app");

const screen = Comp => {
  return props => (
    <View style={styles.container}>
      <Comp {...props} />
    </View>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: screen(Home),
    Reflect: screen(Reflect)
  },
  {
    InitialRouteName: "Home"
  }
);

// export default createAppContainer(AppNavigator);

export default () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "pink"
  },
  welcome: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontSize: 20
  }
});
