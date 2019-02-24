import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { addReflection } from "../redux/actions/addToStore";
import { connect } from "react-redux";

const Reflect = props =>
  (
    <>
      <Button
        text="state"
        onPress={() => console.log(props.reflect)}
      />
      <Button
        text="dispatch"
        onPress={() => props.addReflection()}
      />
    </>
  );


export default connect(
  state => ({
    reflect: state.reflect
  }), {
    addReflection,
  }
)(Reflect);
