import { View, Text, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import React, {useState} from 'react'
import { stylesWeather } from '../Styles/styles';
import WeatherLondon from './WeatherLondon';
import WeatherBangkok from './WeatherBangkok';

const ModelExample = (): React.JSX.Element => {

    const [isModalVisible,setModalVisible] = useState(false);
    const [selectedCity,setSelectedCity] = useState('');

    const toggleModal = (city: string) => {
        setSelectedCity(city);
        setModalVisible(true);
    };

    const renderWeatherComponent = () => {
        if (selectedCity === 'Lodon'){
            return <WeatherLondon/>;
        } else if (selectedCity === 'Bangkok') {
            return <WeatherBangkok/>;
        }
        return null;
    }

  return (
    <View style = {stylesWeather.container}>
    <Text style={stylesWeather.title}>Weather App</Text> 
      <Pressable 
        style = {[stylesWeather.button, stylesWeather.button]}
        onPress={() => setModalVisible (true)}
        >  
        <Text style={stylesWeather.buttonText}>LONDON</Text>  
      </Pressable>

      <Pressable 
        style = {[stylesWeather.button, stylesWeather.button]}
        onPress={() => setModalVisible (true)}
        >  
        <Text style={stylesWeather.buttonText}>BANGKOK</Text>  
      </Pressable>

      <Modal 
        animationType = "fade"
        transparent = {true}
        visible = {isModalVisible}
        onRequestClose={() => setModalVisible(!isModalVisible)}
        >
            
            <View style = {stylesWeather.container}>
            {renderWeatherComponent()}    
                <Pressable
                    style = {[stylesWeather.button, stylesWeather.button]}
                    onPress={() => setModalVisible(!isModalVisible)}
                >
                    <Text style = {stylesWeather.buttonText}>close</Text>
                </Pressable>
            </View>
        
      </Modal>
    </View>
  )
}

export default ModelExample