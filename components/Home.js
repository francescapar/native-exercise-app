import React from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const exercises = [
  { id: 1, name: "Running", type: "duration" },
  { id: 2, name: "Rowing", type: "duration" },
  { id: 3, name: "Swimming", type: "duration" },
  { id: 4, name: "Push Ups", type: "repetition" },
  { id: 5, name: "Cycling", type: "distance" },
];

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <CustomButton
      title={item.name}
      onPress={() => {
        if (item.type === "repetition") {
          navigation.navigate(item.name, { exercise: item });
        } else {
          navigation.navigate(item.name, { exercise: item });
        }
      }}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercises</Text>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatList}
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
  flatList: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "#48C0CB",
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20
  },
});

export default Home;