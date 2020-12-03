import { useState, useEffect } from "react";
import { generate } from "shortid";
import { AsyncStorage } from "react-native";

export const useColours = () => {
  const [colours, setColours] = useState([]);

  const loadColours = async () => {
    const colourData = await AsyncStorage.getItem("@ColourListStore:Colours");
    if (colourData) {
      const colours = JSON.parse(colourData);
      setColours(colours);
    }
  };

  useEffect(() => {
    if (colours.length) return;
    loadColours();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("@ColourListStore:Colours", JSON.stringify(colours));
  }, [colours]);

  const addColour = (colour) => {
    const newColour = { id: generate(), colour };
    setColours([newColour, ...colours]);
  };
  return { colours, addColour };
};
