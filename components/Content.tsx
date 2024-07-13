import {StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'


type contentMsg ={
    title:string;
}
export class Content extends Component {
  render() {
    return (
      <View>
        
        <Text>Content</Text>
      </View>
    )
  }
}
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

export default Content