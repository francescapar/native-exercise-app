import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./components/Home";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import DistanceExercise from "./components/DistanceExercise";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Running" component={DurationExercise} />
        <Stack.Screen name="Rowing" component={DurationExercise} />
        <Stack.Screen name="Swimming" component={DurationExercise} />
        <Stack.Screen name="Push Ups" component={RepetitionExercise} />
        <Stack.Screen name="Cycling" component={DistanceExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}