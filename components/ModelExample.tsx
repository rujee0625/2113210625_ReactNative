import { View, Text, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import React, {useState} from 'react'
import { stylesModal } from '../Styles/styles';

const ModelExample = (): React.JSX.Element => {

    const [modalVisible,setmodalVisible] = useState(false);
  return (
    <View style = {stylesModal.centeredView}>
      <Pressable 
        style = {[stylesModal.button, stylesModal.buttonOpen]}
        onPress={() => setmodalVisible (true)}
        >  
        <Text style={stylesModal.textStyle}>Show Modal</Text>  
      </Pressable>

      <Modal 
        animationType = "slide"
        transparent = {true}
        visible = {modalVisible}
        onRequestClose={() => setmodalVisible(!modalVisible)}
        >
            <View style = {stylesModal.modalView}>
                <Text style =  {stylesModal.modalText}> Hello React </Text>
                <Pressable
                    style = {[stylesModal.button, stylesModal.buttonClose]}
                    onPress={() => setmodalVisible(!modalVisible)}
                >
                    <Text style = {stylesModal.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
        
      </Modal>
    </View>
  )
}

export default ModelExample