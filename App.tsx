import React from "react";
import {Text, View} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const App=(): React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name = 'Home' component={HomeScreen}/>
        <HomeStack.Screen name = 'About' component={AboutScreen}/>
        <HomeStack.Screen name = 'CreatePost' component={CreatePostScreen}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
export default App;