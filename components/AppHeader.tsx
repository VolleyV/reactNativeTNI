import {StyleSheet, View, Text } from 'react-native'
import React from 'react'


type headerMsg ={
    name:string;
    sub?:string;
}
const AppHeader = ({name,sub}:headerMsg):React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{name} 
        
      </Text>
      <Text style={styles.subtitleText}>{sub}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
    backgroundColor: '#AEC6CF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    
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

