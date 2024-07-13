import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from './AppHeader';

const AppFooter = ():React.JSX.Element => {
    const hello ="Hello TNI Footer";
    const hello2 = <Text>Hello JSX</Text>;
    const isLogin = true;
  return (
    <View>
     <Text style={styles.myText}>{hello}
     {hello} Date:{new Date().toLocaleDateString()}
     </Text>
     {hello2}
     {isLogin && <Text>Welcome John</Text>}
     {
        isLogin==true 
        ? <Text>Welcome Marry</Text>
        : <Text>Not Login</Text>
     }
    </View>
  )
}

export default AppFooter

const styles = StyleSheet.create({
  myText:{
      color:'red'
  }
})