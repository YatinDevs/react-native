import { View, Text } from "react-native";
import React from "react";

import HeroBanner from "./components/HeroBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonComponent from "./components/ButtonComponent";
import PressableComponent from "./components/PressableComponent";
import ImageComponent from "./components/ImageComponent";
import CardComponent from "./components/CardComponent";
import DynamicContent from "./components/DynamicContent";

const Index = () => {
  return (
    <View>
      <Header />

      <ButtonComponent />

      <PressableComponent />
      <ImageComponent />
      <CardComponent />
      <DynamicContent />
      <Footer />
    </View>
  );
};

export default Index;
