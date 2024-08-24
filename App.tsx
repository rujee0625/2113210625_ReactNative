import React from "react";
import {StyleSheet,Text,TextInput,View,ComponentProvider,Alert,} from "react-native";
import NewsApp from "./components/NewsApp";
import AxiosgetData from "./components/AxiosgetData";
import AxiospostData from "./components/AxiospostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";

export default function App(): React.JSX.Element {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/* <FlastListExample/>  */}
      {/* <FlatListcallBackend/> */}
      {/* <NewsApp/> */}
      {/* <AxiosgetData/> */}
      {/* <AxiospostData/> */}
      {/* <WeatherLondon/> */}
      <WeatherBangkok/>
    </View>
  );
}