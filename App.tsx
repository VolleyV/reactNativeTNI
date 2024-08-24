import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectExample from "./components/UseEffectExample";
import { stylesPratice } from "./styles/style";
import React from "react";
import FlatListExample from "./components/FlatListExample";
import FlatListCallBackEnd from "./components/FlatListCallBackEnd";
import NewsApp from "./components/NewsApp";
import AxiosgetData from "./components/AxiosgetData";
import AxiospostData from "./components/AxiospostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/*   <UseEffectExample/> */}
      {/* <FlatListExample/> */}
      {/* <FlatListCallBackEnd/> */}
      {/*  <NewsApp/> */}
      {/* <AxiosgetData/> */}
      {/* <AxiospostData /> */}
      {/* <WeatherLondon/> */}
      <WeatherBangkok/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
