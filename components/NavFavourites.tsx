import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

type DataProps = {
  id: string;
  icon: string;
  location: string;
  destination: string;
};
const data: DataProps[] = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "Addis Ababa, Ethiopia",
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "Adama, Ethiopia",
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
