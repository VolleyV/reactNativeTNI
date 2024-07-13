import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';
import React from 'react';

export default function App():React.JSX.Element {
  const fullName="Nopphoom Boonchan";
  const greet="Hello from App.tsx";
  const school="Thai-Nichi Institue of Technology";
  const onClickme=()=>{
    Alert.alert("Hello","Input your fullname:" + fullName)
  }
  return (
    <View style={styles.container}>
      <AppHeader name={fullName} sub={greet}/>
        <Content title={greet} onClickme={onClickme}/>
      <AppFooter title={school}/>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
