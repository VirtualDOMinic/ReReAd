// In App.js in a new project

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStore } from "redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import Reflect from "./screens/Reflect";
import Add from "./screens/Add";
import EndJourney from "./screens/EndJourney";
import { Provider } from "react-redux";
import { reducer } from "./redux/index";

// Redux store
const store = createStore(reducer, {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
    Reflect: screen(Reflect),
    Add: screen(Add),
    EndJourney: screen(EndJourney)
  },
  {
    InitialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => <Provider store={store}><AppContainer /></Provider>

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FBF7F7",
    paddingHorizontal: 30
  }
});
