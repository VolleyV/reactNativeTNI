import {StyleSheet,Text, View, Image, Button } from "react-native";
import styles from "../styles/style";
import React, { useState } from "react";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("..//assets/studentImage.jpeg");
  const newProfileImage =require("..//assets/coppeachunknow.jpeg")
  const [name, setName] = useState("Nopphoom Boonchan");
  const [img,setImg]=useState(profileImage)
  const handleChangeName = ()=> {
    setName(name == "Nopphoom Boonchan"?"New Name":"Nopphoom Boonchan")
  };
  const handleChangeImage = ()=> {
    setImg(img == profileImage?newProfileImage:profileImage)
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={img} style={styles.profileImage} />
        <View style={{width:200}}>
        <Text style={styles.profileName} >{name}</Text>
        <Button  onPress={handleChangeName} title="Click Name" ></Button>
        <Text>{"\n"}</Text>
        <Button onPress={handleChangeImage} title="Click Image"></Button>
        </View>
      </View>
      
    </View>
  );
};

export default ProfileScreen;
