import { Text, View, TextInput, Button, StyleSheet, Alert } from "react-native";
import React, { Component, useState } from "react";
import { styles, stylesLogin } from "../styles/style";

const Login = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string): boolean => {
    const reCheckEmail = /\S+@\S+\.\S+/;
    return reCheckEmail.test(email);
    /*• \S+ : ตรงกับตัวอักษรที ่ไม่ใช่ช่องว่าง (non-whitespace character) อย่างน้อยหนึ ่งตัว (+ หมายถึงหนึ ่ง
        ตัวหรือมากกว่า)
      • @>>ตรงกับเครื ่องหมาย @
      • \S+ >> ตรงกับตัวอักษรที ่ไม่ใช่ช่องว่าง (non-whitespace character) อย่างน้อยหนึ ่งตัวหลัง @
      • \. >>เครื ่องหมายจุด . (เครื ่องหมายจุด . ต้องถูก escape ด้วย backslash \ เนื ่องจาก . ใน regex หมายถึง
        ตัวอักษรใด ๆ หนึ ่งตัว) */
  };
  const handleSubmit = () => {
    let errorMessage = "";
    if (!name) {
      /*   Alert.alert("Alert", "Please Enter Name", [{ text: "OK" }]);
        return;//break; */
      errorMessage += "Please Enter Name\n";
    }
    if (!email) {
      /* Alert.alert("Alert", "Please Enter Email", [{ text: "OK" }]);
        return;//break; */
      errorMessage += "Please Enter Email\n";
    } else if(!validateEmail(email)){
      errorMessage+="Invalid Email Format\n"
    }
    //check password
    if (!password) {
      errorMessage += "Please Enter Password\n";
    } else if (password.length < 6) {
      errorMessage += "Password must be at least 6 characterss\n";
    }
    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(), [{ text: "OK" }]);
      return;
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]);
  };
  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter your Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <View>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default Login;
