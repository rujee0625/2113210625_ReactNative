import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import styles from '../Styles/styles';


const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/1.jpg");

  return (
    <View style ={styles.container}>
      <View style ={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style = {styles.profileName}>Rujee Nakkardpanou</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;