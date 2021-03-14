import { statusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native'
// import * as Progress from 'react-native-progress';


export default function Prediction({ navigation }) {

    state = {
        username: '',
        password: ''
    }
    handleUsername = (text) => {
        // this.setState({ username: text })
    }
    handlePassword = (text) => {
        // this.setState({ password: text })
    }
    login = (username, password) => {
        // alert('username: ' + username + ' password: ' + password)
        // alert('okay')
        navigation.navigate('Signup')
    }
    register = () => {
        // alert('username: ' + username + ' password: ' + password)
        // alert('okay')
        navigation.navigate('Signup')
    }
    register = () => {
        // alert('username: ' + username + ' password: ' + password)
        // alert('okay')
        navigation.navigate('Signup')
    }


    return (
        <View style={styles.container}>
            <ImageBackground
            source={require('../img/bg.jpeg')}
            style={{ width: '100%', height: '100%' }}>
            <Text style={styles.topic}>Defect Prediction</Text>
            <Text style={styles.headline}>
                <Text>Your Vehicle is : </Text>               
            </Text>
            <Text style={styles.headline}>Vehicle Type</Text>
            <Text style={styles.headline}>xxxxxxxx</Text>
            <View style={styles.rectangle}></View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0
    },

    input: {
        margin: 20,
        height: 40,
        paddingLeft: 10,
        borderColor: '#000000',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#838BF9',
        textAlign: 'center',
        padding: 15,
        margin: 20,
        height: 50
    },
    sosButton: {
        backgroundColor: '#4025C7',
        textAlign: 'center',
        padding: 20,
        margin: 20,
        height: 70
    },
    submitButtonText: {
        textAlign: 'center',
        color: 'white'
    },
    headline: {
        textAlignVertical: "center",
        textAlign: "center",
        color: 'white'

    },
    link: {
        color: '#2CC021'
    },
    topic: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 20,
        color: 'white'
    },rectangle: {
        height: 450,
        width: 300,
        backgroundColor: '#deb887',
        position: 'absolute', 
        zIndex: 99,
        marginLeft: 30,
        marginTop: 150
      }
})