import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import FontAweSome from 'react-native-vector-icons/FontAwesome'
import CameraRoom from './CameraRoom'
import { Camera } from 'expo-camera'
const items = [
    {
        id: 1,
        name: 'wechat',
        title: 'Chat',
    },
    {
        id: 2,
        name: 'video-camera',
        title: 'Video',
        customColor: '#615493',
    },
    {
        id: 3,
        name: 'phone',
        title: 'Call',
    }
]
export const NavBar = ({navigation}) => {
    const [startCamera, setStartCamera] = useState(false);
    const _startCamera = async() => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        if(status === "granted") {
            setStartCamera(true);
        }
        else {
            Alert.alert("Access denied")
        }
    }
    const openCamera = () =>{
        _startCamera();
        navigation.navigate('CameraRoom')
    } 
  return (
    <View style = {[styles.container, styles.box]}>
        {
            items.map((ele,index) => 
                <View key = {index} style = {styles.buttonContainer}>
                    <TouchableOpacity onPress={() => openCamera()}>
                        <FontAweSome  name={ele.name} size={30} color ={ ele.customColor ? ele.customColor : '#CCCCCC'}/>    
                    </TouchableOpacity> 
                    <Text style = {styles.textcustom}>{ele.title}</Text>   
                </View>
             ) 
        }
    <CameraRoom startCamera = {startCamera}/>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        container: {
            position: 'absolute',
            bottom: 0,
            marginTop: 25,
            paddingBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: -10,
        },
        box: {
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginHorizontal: 10,
            paddingVertical: 10,
            paddingHorizontal: 10
        },
        button: {
            color: '#615493',
        },
        textcustom: {
            color: '#E7E7E9'
        },
        buttonContainer: {
            alignItems: 'center',
            flex: 1,
        },
        camera: {
            position: 'absolute',
            top: 0,
        }
    }
)
