import { View, Text } from "react-native";
import React from "react";

const DynamicContent = () => {
  const [content, setContent] = React.useState("Welcome To Native App");

  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
};

export default DynamicContent;
