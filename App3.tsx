import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ComponentProvider, Alert} from "react-native";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Content from "./components/Content";
import { stylesPractice, styles } from "./Styles/styles";

export default function App(): React.JSX.Element {

  // const title = "Message from App.tsx";
  const [fullname,setFullname] = useState('');
  const [message,setMessage] = useState('Message from App.tsx');
  const [footermessage,setFooterMessage] = useState('Thai-Nichi Institute of Technology');

  useEffect(() =>{
    console.log("Componet has mounted");
  },[]);

  useEffect(() =>{
    console.log(`Fullname has changed to: ${fullname}`);
  },[fullname]); //This will run whenever 'fullname' changes

  const handleButtonClick = () => {
    Alert.alert("Hello",`Input your fullname : ${fullname}`);
  }
  
  return (
    <View style={styles.container}>
      <AppHeader fullname = {fullname} message = {message}/>
      {/* <Content message = {message} fullname={fullname}/> */}
      <Content message = {message} onButtonClick={handleButtonClick}/>
      <AppFooter footerMessage = {footermessage}/>
      <TextInput 
        style = {stylesPractice.input}
        placeholder="Enter your fullname"
        value = {fullname}
        onChangeText = {setFullname}
      />
    </View>
  );
}