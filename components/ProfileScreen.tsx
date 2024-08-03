import { View, Text, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../Styles/styles";

const ProfileScreen = (): React.JSX.Element => {

  const oldName = "Rujee Nakkardpanou";
  const oldImage = (require("../assets/1.jpg"));

  const [name, setName] = useState(oldName);
  const [image, setImage] = useState(oldImage);

  const newImage = require("../assets/kawaiiminimal.jpg");

  const handleNameChange = () => {
    setName((prevName) => (prevName === oldName ? "Kawaii Minimal": oldName));
  };

  const handleImageChange = () => {
      setImage((prevImage) => (prevImage === oldImage ? newImage : oldImage));
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={image} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="CHANGE NAME" onPress={handleNameChange} color="blue" />
          <Text style={styles.textDetail}>{"/n"}</Text>
          <Text style={styles.textDetail}>{"/n"}</Text>
          <View>
            <Button
              title="CHANGE IMAGE"
              onPress={handleImageChange}
              color="blue"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
