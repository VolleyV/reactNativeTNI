import { StyleSheet, Text, View, Image } from "react-native";
import styles from "../styles/style";
import React from "react";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("..//assets/studentImage.jpeg");

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>Nopphoom Boonchan</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

