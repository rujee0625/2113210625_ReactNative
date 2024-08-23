import React from "react";
import {StyleSheet, Text, TextInput, View, ComponentProvider,Alert,} from "react-native";
import NewsApp from "./components/NewsApp";

export default function App(): React.JSX.Element {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/* <FlastListExample/>  */}
      {/* <FlatListcallBackend/> */}
      <NewsApp/>

    </View>
  );

}
