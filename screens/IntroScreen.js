import * as React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { CommonActions } from "@react-navigation/native";
import { BrComponent } from "@bloomreach/react-sdk";
import LoremIpsum from "../components/LoremIpsum";

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
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>Intro Screen</Text>
      </View>
      <ScrollView style={styles.main}>
        <BrComponent style={styles.brcomp} path="top" />
        <LoremIpsum words={40} />
        <BrComponent style={styles.brcomp} path="main" />
        <LoremIpsum words={40} />
        <BrComponent style={styles.brcomp} path="bottom" />
      </ScrollView>
      <View style={styles.bottom}>
        <Button
          title="Finish"
          onPress={next}
          titleStyle={{
            color: "#F57C00"
          }}
          type="clear"
        />
        <Button
          title="Previous"
          onPress={previous}
          titleStyle={{
            color: "#F57C00"
          }}
          type="clear"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    // flex:1,
    height: 50
  },
  bottom: {
    marginBottom: 90
  },
  brcomp: {
    width: 100,
    height: 100
  }
});
