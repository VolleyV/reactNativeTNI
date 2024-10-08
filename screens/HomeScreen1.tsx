import { View, Text, Button,StyleSheet } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native';


const HomeScreen = (): React.JSX.Element => {
    const navigation = useNavigation<any>();
  const gotoAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institute of Technology",
      companyID: 100,
    });
  };
  return (
    <View>
      <MaterialIcon name="home" size={40} color={'pink'}/>
      <Text>HomeScreen</Text>
      <Button title="About us" onPress={gotoAbout} />
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา​

    fontWeight: "bold",
  },
});
