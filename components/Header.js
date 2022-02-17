import React from 'react'
import { View,Text, StyleSheet, Image } from 'react-native'
import FontAweSome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
function Header() {
  return (
    <View>
        <View style = {[styles.box, styles.container]}>
            <View style = {styles.container2}>
                <Image source={require('../assets/profile.png')} style = {styles.size} />
                <View>
                    <Text style = {styles.textcustom}>Nghia Vo</Text>
                    <Text style = {styles.gray}>vobanghia12@gmail.com</Text>
                </View> 
            </View>
            <View style = {styles.container2}>
                <FontAweSome  name="search" size={30} color='#615493' />
                <MaterialCommunityIcons name = "dots-vertical" size={30} color='#615493'/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    container2: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    textcustom: {
        fontSize: 18,
        fontWeight: '700',
    },
    gray: {
        color: '#CCCCCC',
        fontSize: 12,
    },
    box: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
    },
    size: {
        width: 40,
        height: 40,
        borderRadius: 12,
        marginRight: 10,
    }
})
export default Header

