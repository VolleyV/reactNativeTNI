import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Alert,TextInput} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';
import React,{useState,useEffect} from 'react';
import { stylesPratice } from './styles/style';

export default function App():React.JSX.Element {
 const [fullname,setFullname] = useState("");
 const [message,setMessage] = useState("Message from App.tsx");
 const [footerMessage,setFooterMessage] = useState("Thai-Nichi Institude of Technology");

useEffect(()=>{
  console.log("Componet has mounted")
},[]);

useEffect(()=>{
  console.log(`Fullname has changed to : ${fullname}`)
},[fullname]); // This will run when "fullname" changes
  const handleButtonClick=()=>{
    Alert.alert("Hello",`Fullname has changed to : ${fullname}`)
  };
  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} message={message}/>
      {/* <Content message={message} fullname={fullname}/> */}
      <Content message={message} onButtonClick = {handleButtonClick}/>
      <AppFooter footerMessage={footerMessage}/>
      <TextInput 
        style={stylesPratice.input}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
        />
      <StatusBar style="auto" />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
