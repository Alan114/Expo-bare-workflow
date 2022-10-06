import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import * as Location from "expo-location";

export default function App() {
  async function handleUserLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
      maximumAge: 10000,
    });
    console.log(location);
  }

  return (
    <View style={styles.container}>
      <Button title="Get location" onPress={handleUserLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
