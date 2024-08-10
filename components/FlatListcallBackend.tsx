import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

interface User{
    id:number;
    name:string;
    email:string;
  }

const FlatListcallBackend = () => {

    //กำหนด state สำหรับเก็บข้อมูล
    const[data,setData] = useState<User[]>([]);
    const[loading,setLoading] = useState(true);

    //กำหนด useEffect สำหรับเรียกข้อมูลจาก API เมื่อ component mount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch((error => 
        {
             console.error(error);
            setLoading(false);
        }
        )
        )
    },[])

    //Function _renderItem สำหรับใช้ใน FlatList
    const _renderItem = ({item}:{item:User}) => (
        <View style = {stylesCallback.item}>
          <Text style={stylesCallback.name}>{item.name}</Text>
          <Text style={stylesCallback.email}>{item.email}</Text>
        </View>
    )

  return (
    <View style = {stylesCallback.container}>
    {loading? (
            <ActivityIndicator size="large" color="red"/>
        ):(//ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง FlastList
            <FlatList
                data = {data}
                renderItem={_renderItem}
                keyExtractor={item => item.id.toString()}
            />

        )
    }
    </View>
  );
};

export default FlatListcallBackend;

const stylesCallback = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#fcfe8d"
  },
  item: {
    backgroundColor: "#fedd8d",
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
