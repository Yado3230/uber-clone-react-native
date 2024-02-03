import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootStackParamList from "../types/RootStackParamList";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
import { LocationType } from "../types/types";

type DataProps = {
  id: string;
  title: string;
  image: string;
  screen: string;
};
const data: DataProps[] = [
  {
    id: "1",
    title: "Get a Ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const origin: LocationType = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(item.screen as keyof RootStackParamList)
          }
          disabled={!origin}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded`}
        >
          <View style={tw`${!origin ? "opacity-20" : ""}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
export default NavOptions;
