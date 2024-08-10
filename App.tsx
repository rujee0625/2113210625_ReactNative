import React from "react";
import {StyleSheet, Text, TextInput, View, ComponentProvider,Alert,} from "react-native";
import ProfileScreen from "./components/ProfileScreen";
import Login from "./components/Login";
import FlastListExample from "./components/FlastListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";

export default function App(): React.JSX.Element {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/* <FlastListExample/>  */}
      <FlatListcallBackend/>

    </View>
  );

}
