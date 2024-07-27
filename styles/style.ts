import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      padding: 20,
      backgroundColor: "#9A9A9A",
    },
    profileImage: {
      borderRadius: 50,
      width: 100,
      height: 100,
      marginRight: 20,
    },
    profileContainer:{
      flexDirection:"row",
      alignItems:"center",
      width:"100%",
      padding:20,
      borderRadius:10,
      backgroundColor:"white",
      elevation:5,
      marginTop:50,
    },
    profileName: {
      fontSize:18,
      color:"#0031B3",
      fontWeight:"800",
  
    }
  });

  export default styles