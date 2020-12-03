import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import ColourButton from "./ColourButton";
import ColourForm from "./ColourForm";
import { useColours } from "../hooks";

export default function ColourList({ navigation }) {
  const [backgroundColour, setBackgroundColour] = useState("blue");
  const { colours, addColour } = useColours();
  return (
    <>
      <ColourForm onNewColour={addColour} />
      <FlatList
        style={[styles.colourList]}
        data={colours}
        renderItem={({ item }) => (
          <ColourButton
            backgroundColor={item.colour}
            key={item.id}
            onPress={() =>
              navigation.navigate("Details", { colour: item.colour })
            }
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  colourList: {
    flex: 1,
    display: "flex",
  },
});
