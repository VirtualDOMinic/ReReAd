import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <View>
        <Button
          text={appData.reflectionButtonText}
          onPress={() => this.props.navigation.navigate("Reflect")}
        />
        <Button
          text="state"
          onPress={() => console.log(this.props.reflect)}
        />
      </View>
    );
  }
}

export default connect(state => ({ reflect: state.reflect }))(Home);


const appData = {
  version: 1,
  reflectionButtonText: "Add new reflection",
  good: {},
  bad: {
    shortTerm: "Why do you want to do it?",
    later: "Would you still feel the benefits a few hours after?",
    longTerm:
      "How would your life be different if you avoided this for a year?",
    alternatives: "What are the alternatives"
  }
};

const userReflection = {
  version: 0,
  title: "",
  type: "bad",
  questionsAnswers: {
    shortTerm: [],
    later: [],
    longTerm: [],
    alternatives: []
  }
};
