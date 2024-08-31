import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React from 'react'

const CreatePostScreen = ({ navigation }: any): React.JSX.Element => {

    const [postText,setPostText] = React.useState("");

  return (
    <>
    <TextInput
    multiline
    placeholder="Tell something...?"
    style={{height:200, padding:10, backgroundColor: 'white'}}
    value={postText}
    onChangeText={setPostText}
    />

    <Button
    title="Done"
    onPress={()=>{
        navigation.navigate({
            name: 'Home', 
            params: { post: postText},
        });
    }}/>

    </>
  )
}

export default CreatePostScreen