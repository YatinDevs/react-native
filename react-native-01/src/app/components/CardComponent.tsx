import { View, Text, Image, Button } from "react-native";
import React from "react";

const CardComponent = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 20,
        margin: 10,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../assets/load12.jpeg")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />

      <Text style={{ fontSize: 18, marginBottom: 10 }}>Load Consignment</Text>

      <Button title="Book Load" onPress={() => console.log("Load booked")} />
    </View>
  );
};

export default CardComponent;
