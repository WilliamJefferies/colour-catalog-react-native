import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { generate } from "shortid";

import ColourButton from "./Components/ColourButton";
import ColourForm from "./Components/ColourForm";

const useColours = () => {
  const [colours, setColours] = useState([]);
  const addColour = (colour) => {
    const newColour = { id: generate(), colour };
    setColours([newColour, ...colours]);
  };
  return { colours, addColour };
};

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const { colours, addColour } = useColours();
  return (
    <>
      <ColourForm onNewColour={addColour} />
      <FlatList
        style={[styles.container, { backgroundColor }]}
        data={colours}
        renderItem={({ item }) => (
          <ColourButton
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
