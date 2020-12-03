import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ColorButton from "./Components/ColourButton";
import ColourForm from "./Components/ColourForm";
import defaultColors from "./data/defaultColors.json";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <>
      <ColourForm
        onNewColour={(newColour) => Alert.alert()`TODO: add color ${newColour}`}
      />
      <FlatList
        style={[styles.container, { backgroundColor }]}
        data={defaultColors}
        renderItem={({ item }) => (
          <ColorButton
            backgroundColor={item.color}
            key={item.id}
            onPress={setBackgroundColor}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
});
