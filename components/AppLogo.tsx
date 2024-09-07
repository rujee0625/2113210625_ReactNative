import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'

const AppLogo = (): React.JSX.Element => {
  return (
    <View>
        <Image source = {require('../assets/tni_logo.png')}
        resizeMode='cover'
        style={styles.Logo}
        />
    </View>
  )
}

export default AppLogo

const styles = StyleSheet.create({
    Logo: {
      width: 70,
      height: 50,
    },
   
  });
  