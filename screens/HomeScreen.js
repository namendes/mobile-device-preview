import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { CommonActions } from "@react-navigation/native";
import { BrComponent } from "@bloomreach/react-sdk";

import {
  LongPressGestureHandler,
  State,
  TapGestureHandler
} from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  function next() {
    var navActions = CommonActions.reset({
      index: 0,
      routes: [{ name: "intro" }]
    });
    navigation.dispatch(navActions);
  }

  const doubleTapRef = React.createRef();
  const _onHandlerStateChange = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I'm being pressed for so long");
    }
  };
  const _onSingleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I'm touched");
    }
  };
  const _onDoubleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("D0able tap, good job!");
    }
  };

  const handlerLongClick = () => {
    //handler for Long Click
    alert(" Button Long Pressed");
  };
  const handlerClick = () => {
    //handler for Long Click
    alert(" Button Long Pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>Home Screen</Text>
      </View>
      <ScrollView style={styles.main}>
        <BrComponent style={styles.brcomp} path="main" />
      </ScrollView>
      <LongPressGestureHandler
        onHandlerStateChange={_onHandlerStateChange}
        minDurationMs={800}
      >
        <TapGestureHandler
          onHandlerStateChange={_onSingleTap}
          waitFor={doubleTapRef}
        >
          <TapGestureHandler
            ref={doubleTapRef}
            onHandlerStateChange={_onDoubleTap}
            numberOfTaps={2}
          >
            <View style={styles.box} />
          </TapGestureHandler>
        </TapGestureHandler>
      </LongPressGestureHandler>

      <TouchableOpacity
        onLongPress={handlerLongClick}
        onPress={handlerClick}
        //Here is the trick
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.TextStyle}> LONG PRESS THE BUTTON </Text>
      </TouchableOpacity>
      <View style={styles.bottom}>
        <Button
          title="Next"
          onPress={next}
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
  box: {
    width: 150,
    height: 150,
    alignSelf: "center",
    backgroundColor: "plum",
    margin: 10,
    zIndex: 200
  },
  title: {
    // flex:1,
    height: 50
  },
  main: {
    // flex: 1,
    // backgroundColor: "#d0daaa",
    //  height: 50,
  },
  bottom: {
    marginBottom: 90
  },
  button: {
    width: "80%",
    height: 40,
    justifyContent: "center",
    backgroundColor: "#EE5407"
  },

  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  brcomp: {
    width: 100,
    height: 100
  }
});
