import {StyleSheet, View, Text } from 'react-native'
import { stylesPratice } from '../styles/style';
import React from 'react'


type headerMsg ={
    fullname:string;
    message?:string;
}
const AppHeader = ({fullname,message}:headerMsg):React.JSX.Element => {
  return (
    <View style={stylesPratice.header}>
      <Text style={stylesPratice.fullname}>
        Input your fullname: {fullname}
      </Text>
      <Text style={stylesPratice.message}>{message}</Text>
    </View>
  )
}

    
export default AppHeader

