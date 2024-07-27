import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';
import ProfileScreen from './components/ProfileScreen';
import React from 'react';


const App = ():React.JSX.Element => {
  return(
    <View>
      <ProfileScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default App
