import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function ColourForm() {
  const [inputValue, setValue] = useState("");
  const input = useRef();

  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        style={styles.txtInput}
        value={inputValue}
        onChangeText={(text) => setValue(text)}
        autoCapitalize={"none"}
        placeholder={"enter a color..."}
      />
      <Button
        title={"add"}
        onPress={() => {
          input.current.blur();
          console.log(`add value ${inputValue}`);
          setValue("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  },
});
