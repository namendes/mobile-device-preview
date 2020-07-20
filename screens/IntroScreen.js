import * as React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { CommonActions } from "@react-navigation/native";


export default function IntroScreen({ navigation }) {
  function previous() {
    var navActions = CommonActions.reset({
      index: 0,
      routes: [{ name: "home" }]
    });
    navigation.dispatch(navActions);
  }
  
  function next() {
    var navActions = CommonActions.reset({
      index: 0,
      routes: [{ name: "main" }]
    });
    navigation.dispatch(navActions);
  }
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Intro Screen</Text>
      <Button
        title="Previous"
        onPress={previous}
        titleStyle={{
          color: "#F57C00"
        }}
        type="clear"
      />

      <Button
        title="Finish"
        onPress={next}
        titleStyle={{
          color: "#F57C00"
        }}
        type="clear"
      />
    </View>
  );
}
