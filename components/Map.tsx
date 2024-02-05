import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import { LocationType } from "../types/types";
import MapViewDirections from "react-native-maps-directions";
// @ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map: React.FC = () => {
  const origin: LocationType | null = useSelector(selectOrigin);
  const destination: LocationType | null = useSelector(selectDestination);
  const mapRef = useRef<MapView | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;

    const coordinates = [
      {
        latitude: origin.location.lat,
        longitude: origin.location.lng,
      },
      {
        latitude: destination.location.lat,
        longitude: destination.location.lng,
      },
    ];

    mapRef?.current?.fitToCoordinates(coordinates, {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }, // Adjust padding as needed
      animated: true,
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=${origin.description}&units=imperial&key=${GOOGLE_MAPS_APIKEY}`
      );
      const responseData = await res.json();
      dispatch(setTravelTimeInformation(responseData.rows[0].elements[0]));
    };
    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <MapView
      ref={mapRef}
      mapType="mutedStandard"
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin?.location.lat || 8.9960024,
        longitude: origin?.location.lng || 38.7786956,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
