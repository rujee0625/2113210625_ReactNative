import React, { useEffect, useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import MenuScreen from "./screens/MenuScreen";
import DetailScreen from "./screens/DetailScreen";
import Login from "./components/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";

import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppSelector,useAppDispatch } from "./redux-toolkit/hooks";
import { selectAuthState,setIsLoading, setIsLogin, setProfile } from "./auth/auth-sliec";
import { getProfile } from "./services/auth-service";

import { ActivityIndicator, View } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const App = (): React.JSX.Element => {
  //ใช้ useAppSelector เพื่อดึง state จาก store
  const {isLogin,isLoading} = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const checkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await getProfile();
      if(response?.data.data.user){
        dispatch(setProfile(response.data.data.user));
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }

    } catch (error) {
      console.log(error);
    } finally{
      dispatch(setIsLoading(false));
    }
  }
  useFocusEffect(
    React.useCallback(()=>{
      checkLogin();
    },[])
  )

  if(isLoading){
    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size='large' color='blue'/>
    </View>
  }
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator
        initialRouteName="Products"
        screenOptions={{
          // headerStyle: { backgroundColor: "#ffde59"},
          // headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          // options={{title: 'หน้าหลัก'}}
        />
        <HomeStack.Screen
          name="About"
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
    );
  }

  function ProductStackScreen() {
    return (
      <ProductStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // headerStyle: { backgroundColor: "#ffde59"},
          // headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <ProductStack.Screen name="Products" component={ProductScreen} />
        <ProductStack.Screen name="Details" component={DetailScreen} />
      </ProductStack.Navigator>
    );
  }

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
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;
