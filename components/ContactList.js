import React from 'react'
import { View,Text,StyleSheet, Image } from 'react-native'

const contactMenuButtons = [
    {
        name: 'John Doe',
        photo: require('../assets/profile.png')
    },

    {
        name: 'Lebron James',
        photo: require('../assets/profile.png')
    },
    {
        name: 'Kevin Hard',
        photo: require('../assets/profile.png')
    },

]
function ContactList() {
  return (
    <View style={styles.container}>
        {
        contactMenuButtons.map((contact,index) => 
        
             <View style = {styles.row} key ={index}>
                <View style = {styles.image}>
                    <Image source ={contact.photo}  style={styles.image}/>
                </View>
                <Text style = {styles.text} >
                    {contact.name}
                </Text>
            </View>
        )}
    </View>
  )
}

const styles = StyleSheet.create(
    {
        container:{
            marginTop: 20,
            paddingLeft: 15,
        },
        row: {
            flexDirection: 'row',
            marginTop: 20, 
            alignItems: 'center',
        },
        image: {
            width: 50,
            height: 50,
            borderRadius: 10,
            
        },
        text: {
            color: 'black',
            paddingLeft: 15,
            fontSize: 18,
        }
    }
)
export default ContactList