import {View,Text,StyleSheet,TouchableOpacity,ActivityIndicator,FlatList,} from "react-native";
import React, { useState, useEffect } from "react";
import { stylesUser } from "../Styles/styles";

interface News {
  title: string;
  description: string;
  publishedAt: string; //local:new Date(item.publishedAt).toLocaleDateString()
  url: string;
}

const NewsApp = () => {
  const [data, setData] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "fb740477dd984980b8b64a3d38a985f7"; // Your API Key here
    const URL =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fb740477dd984980b8b64a3d38a985f7";

    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.articles); // Ensure that the array is properly set
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const _renderItem = ({ item }: { item: News }) => (
    <TouchableOpacity style={stylesUser.item}>
      <Text style={stylesUser.name}>{item.title}</Text>
      <Text style={stylesUser.email}>
        {new Date(item.publishedAt).toLocaleDateString()}
      </Text>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={stylesUser.container}>
      {loading ? ( //loading spinning thing
        <ActivityIndicator size="large" color="red" />
      ) : (
        //if data is loaded show flatlist
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url}
        ></FlatList>
      )}
    </View>
  );
};

export default NewsApp; 