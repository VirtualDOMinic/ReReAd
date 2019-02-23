// In App.js in a new project

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import Reflect from "./screens/Reflect";

const screen = Comp => {
  return props => (
    <View style={styles.container}>
      <Comp textStyle={styles.text} {...props} />
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

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#28112B",
    padding: 16
  },
  welcome: {
    fontSize: 30,
    color: "#E0D8DE",
    textAlign: "center",
    margin: 10
  },
  text: {
    textAlign: "center",
    color: "#E0D8DE",
    marginBottom: 5,
    fontSize: 20
  }
});
