import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type footerMsg ={
    title:string;
}
const AppFooter = ({title}:footerMsg):React.JSX.Element => {
    const hello = "Hello TNI Footer" 
    const hello2 = <Text>Hello JSX</Text>
    const isLogin = true;
  return (
    <View style={styles.footer}>
        <Text style={styles.footerText}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    footer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    },
    footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    },
    });
export default AppFooter

