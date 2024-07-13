import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button,Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';

export default function App():React.JSX.Element {
  const fullName="Nopphoom Boonchan";
  const greet="Hello from App.tsx";
  const school="Thai-Nichi Institue of Technology";
  const onClickme=()=>{
    Alert.alert("Hello","Input your fullname:")
  }
  return (
    <View style={styles.container}>
      <AppHeader title={fullName}/>
      <AppFooter title={school}/>
      <Content/>
      <Button title="Click Me" 
        onPress={onClickme}
        color={"#45CCCA"} 
       />
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
