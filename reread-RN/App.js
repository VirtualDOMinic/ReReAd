// In App.js in a new project

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import Reflect from "./screens/Reflect";
import { Provider } from "react-redux";
// import { addToStore } from "./redux/actions"
import { reducer } from "./redux/index";
import logger from 'redux-logger'


// export const store = createStore(reducer);
const store = createStore(reducer, applyMiddleware(logger))

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

const AppContainer = createAppContainer(AppNavigator);

export default () => {

  return <Provider store={store}><AppContainer /></Provider>
}

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
