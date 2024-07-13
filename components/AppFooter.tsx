import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from './AppHeader';

const AppFooter = ():React.JSX.Element => {
    const hello2 = <Text>Thai-Nichi Institute of Technology</Text>;
    //const isLogin = true;
  return (
    <View>
     <Text style={styles.myText}>{hello2}
     {/* {hello} Date:{new Date().toLocaleDateString()} */}
     </Text>
     {/* {isLogin && <Text>Welcome John</Text>}
     {
        isLogin==true 
        ? <Text>Welcome Marry</Text>
        : <Text>Not Login</Text>
     } */}
    </View>
  )
}

export default AppFooter

const styles = StyleSheet.create({
  myText:{
      color:'Black'
  }
})