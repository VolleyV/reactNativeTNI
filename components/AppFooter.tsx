import { StyleSheet, Text, View } from 'react-native'
import { stylesPratice } from "../styles/style";
import React from 'react'


type footerMsg ={
    footerMessage:string;
}
const AppFooter = ({footerMessage}:footerMsg):React.JSX.Element => {
    const hello = "Hello TNI Footer" 
    const hello2 = <Text>Hello JSX</Text>
    const isLogin = true;
  return (
    <View style={stylesPratice.footer}>
        <Text style={stylesPratice.text}>{footerMessage}</Text>
    </View>
  )
}

export default AppFooter

