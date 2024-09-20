import { View, Text, Image } from "react-native";
import React from "react";

const ImageComponent = () => {
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
      <Text
        style={{
          borderColor: "#f4f4f4",
          borderWidth: 2,
          padding: 20,
          borderRadius: 20,
        }}
      >
        Lets Explore Images
      </Text>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Image
          source={require("../assets/load7.jpeg")}
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
            width: 100,
            height: 100,
          }}
        />
        <Image
          source={{
            uri: "https://loadmatch-liteapp-db.blr1.cdn.digitaloceanspaces.com/Frame.png",
          }}
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
            width: 100,
            height: 100,
          }}
        />
      </View>
    </View>
  );
};

export default ImageComponent;
