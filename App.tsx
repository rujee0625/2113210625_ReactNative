import React from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import MenuScreen from "./screens/MenuScreen";
import DetailScreen from "./screens/DetailScreen";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HeaderButtonsProvider} from 'react-navigation-header-buttons';
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SafeAreaProvider } from 'react-native-safe-area-context';

 const HomeStack = createNativeStackNavigator();
 const ProductStack = createNativeStackNavigator();

 const Drawer = createDrawerNavigator();

const App=(): React.JSX.Element => {
 
  function HomeStackScreen() {
    return(
      <HomeStack.Navigator
        initialRouteName = 'Products'
        screenOptions={{
          // headerStyle: { backgroundColor: "#ffde59"},
          // headerTintColor: "white",
          headerTitleStyle:{fontWeight: 'bold'}, 
        }}>
        <HomeStack.Screen 
          name = 'Home' 
          component={HomeScreen}
          // options={{title: 'หน้าหลัก'}}
        />
        <HomeStack.Screen 
          name = 'About' 
          component={AboutScreen}
          /* options={{title: 'เกี่ยวกับเรา',
          headerStyle:{backgroundColor: '#20b2aa'},
          headerTintColor: 'white',
          headerTitleStyle:{fontWeight: 'bold'},
          headerTitleAlign: 'center'
          }} */
          />
        {/* <HomeStack.Screen name = 'CreatePost' component={CreatePostScreen}/> */}
      </HomeStack.Navigator>
    )
  }

  function ProductStackScreen() {
    return(
      <ProductStack.Navigator
        initialRouteName = 'Home'
        screenOptions={{
          // headerStyle: { backgroundColor: "#ffde59"},
          // headerTintColor: "white",
          headerTitleStyle:{fontWeight: 'bold'}, 
        }}>
        < ProductStack.Screen name = 'Products' component={ProductScreen}/>
        < ProductStack.Screen name = 'Details' component={DetailScreen}/>
      </ ProductStack.Navigator>
    )
  }

  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
      
          </Drawer.Navigator>
        </NavigationContainer>
      </HeaderButtonsProvider>
    </SafeAreaProvider>
  )
}
export default App;