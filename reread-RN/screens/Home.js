import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

export default class Home extends Component {
  state = {
    reflections: [],
    userReflection
  };

  render() {
    return (
      <View>
        <Text>Hi! What would you like to reflect on?</Text>
        <Button text={appData.reflectionButtonText} onPress={} />
      </View>
    );
  }
}

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
