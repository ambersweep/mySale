import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

function WelcomeScreen(props) {
    return (
        <>
         <ImageBackground 
         style={styles.background}
         source={require('../assets/background.jpg')}></ImageBackground> 
         <View style={styles.logoContainer}>
         <Image style={styles.logo}
         source={require("../assets/logo.png")} />  
         <Text>Sell It</Text>
         </View>
         <View style={styles.loginButton}></View>
         <View style={styles.registerButton}></View>
         
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#c7b100',
    },
    logo:{
        width: 100,
        height: 150,
     
    },
    logoContainer: {
        position:"absolute",
        alignSelf: "center",
        top: 70,
        alignItems: "center",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#6a839c',
    }
})
export default WelcomeScreen;