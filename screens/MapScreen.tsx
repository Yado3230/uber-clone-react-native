import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const MapScreen = () => {
  return (
    <View>
      <Text>This is the map staff</Text>
      <View style={tw`h-1/2`}></View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;
