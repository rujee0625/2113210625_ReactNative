import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

interface UserItem{
  id:string;
  name:string;
  email:string;
}

const FlastListExample = () :React.JSX.Element => {
  const user: UserItem[] = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' },
    { id: '3', name: 'Cara', email: 'cara@example.com' }
  ];

//Function _renderItem
const _renderItem = ({item}:{item:UserItem}) => (
  <View style = {stylesFlastList.item}>
    <Text style={stylesFlastList.name}>{item.name}</Text>
    <Text style={stylesFlastList.email}>{item.email}</Text>
  </View>
  
)

  return (
    <View style={stylesFlastList.container}>
      <FlatList
      data = {user} //กำหนดข้อมูลให้กับ FlastList
      renderItem = {_renderItem} //สร้างฟังก์ชัน _renderItem
      keyExtractor = {(item)=>item.id} //กำหนด Key สำหรับเฉพาะแต่ละ Item
      />
    </View>
  )
}

export default FlastListExample

const stylesFlastList =StyleSheet.create({
  container: {
  marginTop: 50,
  },
  item: {
  backgroundColor: '#f9c2ff',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
  },
  name: {
  fontSize: 16,
  fontWeight: 'bold',
  },
  email: {
  fontSize: 14,
  },
  });