import React from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import { NavBar } from '../components/NavBar';
import ContactList from '../components/ContactList';
export const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <SafeAreaView style={{height: '100%'}}>
            <Header/>
            <ContactList/>
            <NavBar navigation = {navigation}/>
        </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "#e7e7e9",
            paddingVertical: 20,
            paddingTop: Platform.OS === 'android' ? 25 : 0,
            marginTop: 10,
        }
    }
)

