import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  handlePress: any;
  containerStyles: string;
  textStyles: string;
  isLoading: boolean;
}
const CustomButton: React.FC<ButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${
        isLoading ? "opacity-50" : ""
      } ${containerStyles} bg-secondary rounded-xl min-h-[62px] justify-center items-center`}
      disabled={isLoading}
    >
      <Text className={`${textStyles} text-primary font-psemibold text-lg`}>
        {title}
      </Text>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
