import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosgetData = (): React.JSX.Element => {
  type User = {
    id: number;
    name: string;
    email: string;
  };

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  //get data by axios
  const fetchData = async () => {
    try {
      //<User[]> check if fetch data match the type of User[]
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch {
      setError("Fail to fetch users");
    } finally {
      setLoading(false);
    } //end of try/catch
  }; //end of fetchData
 
  useEffect(() => {
    fetchData();
  }, []);
 
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
 
  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }
  return (
    <FlatList
    contentContainerStyle = {styles.container}
    data={users}
    renderItem={({item})=>(
        <view style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </view>
    )}
    keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default AxiosgetData;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
