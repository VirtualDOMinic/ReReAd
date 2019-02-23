import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { addReflection } from "../redux/actions/addToStore";
import { connect } from "react-redux";
import { store } from "../redux/index"

const Reflect = ({ dispatch }) =>
  (
    <>
      <Text>Dummy text here! REFLECT PLS</Text>
      <Text>Dummy text here! REFLECT PLS</Text>
      <Text>Dummy text here! REFLECT PLS</Text>
      <Text>Dummy text here! REFLECT PLS</Text>
      <Button
        text="hello"
        onPress={() => console.log(store.getState())}
      />
      <Text>Dummy text here! REFLECT PLS</Text>
      <Button
        text="dispatch"
        onPress={() => store.dispatch(addReflection())}
      />
    </>
  );

export default connect()(Reflect);
