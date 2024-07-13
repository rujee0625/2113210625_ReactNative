import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type AppHeaderProps ={
    title: string;
}


const AppHeader = ({title}: AppHeaderProps): React.JSX.Element => {
    const isLogin = true;
    {isLogin && <Text></Text>}
     {
        isLogin==true 
        ? <Text>Rujee Nakkardpanou</Text>
        : <Text>Not OK</Text>
     }
  return (
    <View >
      <Text>{title}</Text>
    </View>
  )
}


export default AppHeader

const styles = StyleSheet.create({
    top: {
        flex: 0.3,
        backgroundColor: 'grey',
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
})