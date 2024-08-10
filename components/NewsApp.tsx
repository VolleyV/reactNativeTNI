import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { Component, useState, useEffect } from "react";
interface News {
  title: String;
  publishedAt: String; //convert to date local:new Date(item.publishedAt).toLocaleDateString();
  description: String;
  url: String;
}
const NewsApp = (): React.JSX.Element => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const API_KEY = "bd6b0cf51a5a4c68a9a06201a4aba186";
    const URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}";
    const useAPI="https://newsapi.org/v2/top-headlines?country=us&apiKey=653e6c13f9fe4d7fa18459b44ac215e4"
    fetch(useAPI)
      .then((Response) => Response.json())
      .then((news) => {
        setNews(news);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  const _renderItem = ({ item }: { item:News }) => (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.headline}>{item.title}</Text>
      <Text style={styles.date}>
         {new Date(item.publishedAt).toLocaleDateString()}
      </Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {loading ? ( //if loading will show ActivityIndicator
        <ActivityIndicator size={"large"} color={"blue"} />
      ) : (
        //if loading is done will show Flatlist
        <FlatList
          data={news}
          renderItem={_renderItem}
          keyExtractor={item=>item.url} 
       />
      )}
    </View>
  );
};
export default NewsApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
