import { View, Text, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../Styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const [name, setName] = useState("Rujee Nakkardpanou");
  const [image, setImage] = useState(require("../assets/1.jpg"));

  const handleNameChange = () => {
    setName("Kawaii Minimal");
  };

  const handleImageChange = () => {
    setImage(require("../assets/kawaiiminimal.jpg"));
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
