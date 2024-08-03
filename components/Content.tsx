import { Text, StyleSheet, View,Button,Alert} from 'react-native'
import { stylesPratice } from '../styles/style';
import React, { Component } from 'react'


type contentMsg ={
  message:string;
  fullname:string;
}
const Content = ({message,fullname}:contentMsg):React.JSX.Element => {
  const [displayFullname,setDisplaFullname] =React.useState('');
  const handleButtonClick = ()=>{
    setDisplaFullname(fullname);
    Alert.alert("Hello",`Fullname has changed to : ${fullname}`)
  }
  return (
    <View style={stylesPratice.content}>
    <Text style={stylesPratice.text}>{message}</Text>
    <Text style={stylesPratice.text}>{displayFullname}</Text>
    <Button
          title="Click Me" 
          onPress={handleButtonClick}
          color={"#45CCCA"} 
          
        />
  </View>
  )
}

export default Content

