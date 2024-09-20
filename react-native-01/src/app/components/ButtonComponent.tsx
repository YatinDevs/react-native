import { View, Text, Button } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      {/* Events */}
      <Button
        title="Add More"
        color="#f4f4f4"
        onPress={() => alert("Added Results")}
      />
    </View>
  );
};

export default ButtonComponent;
