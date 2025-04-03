import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RepetitionExercise = ({ navigation, route }) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.exercise.name}</Text>
      <View style={styles.content}>
        <Text style={styles.count}>Count: {count}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(0)}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.homeButton]} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  count: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#48CB9C',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  homeButton: {
    marginBottom: 30,
    backgroundColor: '#48C0CB',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RepetitionExercise;