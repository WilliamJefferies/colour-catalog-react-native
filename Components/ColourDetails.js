import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "Color"; //stupid americans

export default function ColourDetails({ route }) {
  const { colour: name } = route.params;
  const color = Color(name);
  const textColour = { fontSize: 30, color: color.negate().toString() };
  return (
    <View style={[styles.container, { backgroundColor: name }]}>
      <Text style={textColour}>{name}</Text>
      <Text style={textColour}>{color.rgb().toString()}</Text>
      <Text style={textColour}>{color.hsl().toString()}</Text>
      <Text style={textColour}>{color.luminosity().toString()}</Text>
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
