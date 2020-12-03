import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ColourDetails({ route }) {
  return (
    <View style={styles.container}>
      <Text>Colour Details: {route.params.colour}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
