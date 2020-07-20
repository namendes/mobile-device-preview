import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { CommonActions } from "@react-navigation/native";
import { BrComponent } from "@bloomreach/react-sdk";

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
      <BrComponent style={styles.brcomp} path="main" />
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aa0000",
    alignItems: "center",
    justifyContent: "center"
  },
  brcomp:{
    width:100,
    height:100,

  }
});
