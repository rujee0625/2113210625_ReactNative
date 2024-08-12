import {View,Text,StyleSheet,TouchableOpacity,ActivityIndicator,FlatList,} from "react-native";
import React, { useState, useEffect } from "react";

interface User {
  title: string;
  description: string;
  publishedAt: string; //local:new Date(item.publishedAt).toLocaleDateString()
  url: string;
}

const NewsApp = () : React.JSX.Element => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "fb740477dd984980b8b64a3d38a985f7"; // Your API Key here
    const useURL = `https://newsapi.org/v2/everything?q=apple&from=2024-08-11&to=2024-08-11&sortBy=popularity&apiKey=fb740477dd984980b8b64a3d38a985f7`;

    fetch(useURL)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Ensure that the array is properly set
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const _renderItem = ({item}:{item:User}) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.headline}>{item.title}</Text>
      <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {loading ? ( // if loading info it's will show ActivityInidicator
        <ActivityIndicator size="large" color="red" />
      ) : (
        // if info is loaded it will show Flatlist
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url} // กำหนด key สำหรับ item
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
    flex: 1, // Ensure the container takes up the full screen
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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