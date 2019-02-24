// In App.js in a new project

import React from "react";
import { StyleSheet, View } from "react-native";
import { createStore } from "redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import Reflect from "./screens/Reflect";
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
    Reflect: screen(Reflect)
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
