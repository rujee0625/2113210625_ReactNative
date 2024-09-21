import React, { useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import MenuScreen from "./screens/MenuScreen";
import DetailScreen from "./screens/DetailScreen";
import Login from "./components/Login";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HeaderButtonsProvider} from 'react-navigation-header-buttons';
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";

 const HomeStack = createNativeStackNavigator();
 const ProductStack = createNativeStackNavigator();
 const LoginStack = createNativeStackNavigator();

 const Drawer = createDrawerNavigator();

const App=(): React.JSX.Element => {
  const [isLogin] = useState(false);
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
    );
  };

  function LoginStackScreen() {
    return (
      <LoginStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <LoginStack.Screen name="Login" component={LoginScreen} />
      </LoginStack.Navigator>
    );
  }

  return (
    <>
    <SafeAreaProvider>
      <NavigationContainer>
      <HeaderButtonsProvider stackType="native">
        
       {  isLogin?(
             <Drawer.Navigator
             screenOptions={{ headerShown: false }}
             drawerContent={(props) => <MenuScreen {...props} />}
           >
             <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
             <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
           </Drawer.Navigator>
        ):(
            <LoginStackScreen/>
        )
       }
          </HeaderButtonsProvider>
        </NavigationContainer>
    
    </SafeAreaProvider>
    <Toast/>
    </>
  );
}
export default App;