import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";

export default function HomeScreen() {

  function next(){
    
    var navActions = CommonActions.reset({
      index: 0,
      routes: [{ name: "intro" }]
    });
    navigation.dispatch(navActions);
  };

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Next"
        onPress={next}
        titleStyle={{
          color: "#F57C00"
        }}
        type="clear"
      />
      </View>
    );
  }