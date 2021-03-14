import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../app/screens/WelcomeScreen";
import ViewImageScreen from "../app/screens/ViewImageScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Details" component={ViewImageScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
