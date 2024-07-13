import { Text, StyleSheet, View,Button,Alert} from 'react-native'
import React, { Component } from 'react'


type contentMsg ={
  title:string;
  onClickme: () => void;
}
const Content = ({title, onClickme}:contentMsg):React.JSX.Element => {
  return (
    <View style={styles.content}>
    <Text style={styles.text}>{title}</Text>
    <Button
          title="Click Me" 
          onPress={onClickme}
          color={"#45CCCA"} 
          
        />
  </View>
  )
}

export default Content

const styles = StyleSheet.create({
  content: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  },
  text: {
  fontSize: 18,
  marginBottom: 20,
  },
  });