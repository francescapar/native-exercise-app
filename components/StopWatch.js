import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function StopWatch() {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const intervalRef = React.useRef(null);

  const updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(updateTimer, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, updateTimer]);

  const startStop = useCallback(() => {
    setRunning((prevState) => !prevState);
  }, []);

  const reset = useCallback(() => {
    setTimer(0);
  }, []);

  const mins = Math.floor((timer / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const mills = (timer % 1000).toString().padStart(3, "0");

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {mins}:{secs}.{mills}
      </Text>
      <TouchableOpacity style={styles.button} onPress={startStop}>
        <Text style={styles.buttonText}>{running ? "Pause" : "Start"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    fontSize: 50,
    fontFamily: "monospace",
    marginBottom: 20,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "#48CB9C",
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
});