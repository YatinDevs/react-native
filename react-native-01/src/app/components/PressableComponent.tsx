import React from "react";
import { View, Text, Pressable } from "react-native";

const PressableComponent = () => {
  return (
    <View>
      {/*
          1. onPress : Function that is called when the component is pressed. Required.
          2. onPressIn : Function that is called when the press gesture starts.
          3. onPressOut : Function that is called when the press gesture ends (or is cancelled).
          4. onLongPress : Function that is called when a long press is detected.
          
        */}
      <Text>Lets Explore Pressables</Text>

      <Pressable onPress={() => alert("Pressed Activated")}>
        <Text style={{ color: "red" }}> onPress ( Press Here )</Text>
      </Pressable>
      <Pressable onPressIn={() => alert("On Press IN Activated")}>
        <Text style={{ color: "coral" }}> onPressIn ( Press Here )</Text>
      </Pressable>
      <Pressable onPressOut={() => alert("onPressOut Activated")}>
        <Text style={{ color: "magenta" }}> onPressOut ( Press Here )</Text>
      </Pressable>
      <Pressable onLongPress={() => alert("onLongPress Activated")}>
        <Text style={{ color: "crimson" }}> onLongPress ( Press Here )</Text>
      </Pressable>
    </View>
  );
};

export default PressableComponent;
