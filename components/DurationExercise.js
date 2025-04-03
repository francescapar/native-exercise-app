import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import StopWatch from "./StopWatch";

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const DurationExercise = ({ navigation, route }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    return () => {
      setIsActive(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.exercise.name}</Text>
      <StopWatch isActive={isActive} /> {}
      <CustomButton
        title="Home"
        onPress={() => navigation.navigate("Home")}
        color="#9AE4D4"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20
  },
  button: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#48C0CB",
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DurationExercise;