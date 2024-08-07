import { View, Text, Image, Button, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../Styles/styles";

const Login = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const handleButtonClick = () => {
    Alert.alert("Hello", `Input your fullname : ${fullname}`);
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.inputLogin}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
      />

      <TextInput
        style={stylesLogin.inputLogin}
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Submit" onPress={handleButtonClick} color="orange" />
    </View>
  );
};

export default Login;
