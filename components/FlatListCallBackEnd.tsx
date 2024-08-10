import { Text, StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import React, { Component, useState, useEffect } from "react";
interface User {
  id: number;
  name: string;
  email: string;
}
const FlatListCallBackEnd = (): React.JSX.Element => {
  //define state for data and loading
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  //define effect for call API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  //Function _renderItem use in FlatList
  const _renderItem = ({item}:{item:User}) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  )
  return (
    <View style={styles.container}>
     {loading?( //if loading will show ActivityIndicator
        <ActivityIndicator size={"large"} color={"blue"}/>
     ):(//if loading is done will show Flatlist
        <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={item=>item.id.toString()}
        />
     )

     }
    </View>
  );
};

export default FlatListCallBackEnd;


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
