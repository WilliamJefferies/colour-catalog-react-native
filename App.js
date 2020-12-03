import React from "react";
import ColourList from "./Components/ColourList";
import ColourDetails from "./Components/ColourDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name={"Home"}
          options={{ title: "Colour List" }}
          component={ColourList}
        />
        <Screen name={"Details"} component={ColourDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
