import { View, Text, Image, Button } from "react-native";
import React, { useState } from "react";
import {stylesProflie} from "../Styles/styles";

const ProfileScreen = (): React.JSX.Element => {

  const oldName = "Rujee Nakkardpanou";
  const oldImage = (require("../assets/1.jpg"));
  const newImage = require("../assets/kawaiiminimal.jpg");

  const [name, setName] = useState(oldName);
  const [image, setImage] = useState(oldImage);


  const handleNameChange = () => {
      setName (name == oldName ? "Kawaii Minimal": oldName);
  };

  const handleImageChange = () => {
      setImage (image == oldImage ? newImage : oldImage);
  };

  return (
    <View style={stylesProflie.container}>
      <View style={stylesProflie.profileContainer}>
        <Image source={image} style={stylesProflie.profileImage} />
        <View>
          <Text style={stylesProflie.profileName}>{name}</Text>
          <Button title="CHANGE NAME" onPress={handleNameChange} color="green" />
          <Text style={stylesProflie.textDetail}>{"\n"}</Text>
          <View>
            <Button
              title="CHANGE IMAGE"
              onPress={handleImageChange}
              color="red"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
