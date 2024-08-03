import { Text, View,TextInput,Button,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { styles,stylesLogin } from '../styles/style'


export class Login extends Component {
  render() {
    return (
      <View style={stylesLogin.container}>
        <TextInput 
        style={stylesLogin.input}
        placeholder="Enter your Name"
        />
        <TextInput 
        style={stylesLogin.input}
        placeholder="Enter your Email"
        />
        <Button title='Submit'></Button>
      </View>
    )
  }
}

export default Login