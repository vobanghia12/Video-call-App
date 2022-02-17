import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { Camera } from 'expo-camera'
const CameraRoom = (props) => {
 
  return (
    <View>
        {props.startCamera?(<Text></Text>) : (<Camera type={'front'} style={{width: '100%', height: '100%'}}></Camera>) }
    </View>
  )
}

export default CameraRoom