import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import App from '../App'

type headerMsg ={
    title:string;
}
const AppHeader = ({title}:headerMsg):React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text>{title} 
      </Text>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
    backgroundColor: '#AEC6CF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    },
    headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    },
    subtitleText: {
    fontSize: 16,
    color: '#fff',
    },
    });
export default AppHeader

