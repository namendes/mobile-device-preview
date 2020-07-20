import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/IntroScreen";
import useLinking from "./utils/useLinking";

const Stack = createStackNavigator();

function App() {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();
  const [currentNavigationState, setCurrentNavigationState] = useState("");

  const navigationRef = React.useRef();
   const { getInitialState } = useLinking(navigationRef);

  React.useEffect(() => {
    getInitialState()
      .catch(() => {})
      .then(state => {
        //console.log(state)
        if (state !== undefined) {
          setInitialState(state);
        }
        setIsReady(true);
      });
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }
  
  const getActiveRouteName = state => {
    const route = state.routes[state.index];
    // console.log(state)
    if (route.state) {
      // Dive into nested navigators
      return getActiveRouteName(route.state);
    }

    return route.name;
  };

  return (
    <NavigationContainer
      initialState={initialState}
      ref={navigationRef}
      onStateChange={state => {
        const previousRouteName = currentNavigationState;
        const currentRouteName = getActiveRouteName(state);
        console.log(previousRouteName + " - " + currentRouteName);
        if (previousRouteName !== currentRouteName) {
          changeRoute(currentRouteName);
        }
        setCurrentNavigationState(currentRouteName);
      }}
    >
      <Stack.Navigator initialRouteName={HomeScreen} headerMode="none">
        <Stack.Screen
          name="intro"
          component={IntroScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
