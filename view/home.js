import { statusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Switch, StyleSheet, StatusBar } from 'react-native'
// import * as Progress from 'react-native-progress';


export default function Home({ navigation }) {

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
    predict = () => {
        // alert('username: ' + username + ' password: ' + password)
        // alert('okay')
        navigation.navigate('Prediction')
    }
    history = () => {
        // alert('username: ' + username + ' password: ' + password)
        // alert('okay')
        navigation.navigate('History')
    }
    dashboard = () => {
        // alert('username: ' + username + ' password: ' + password)
        // alert('okay')
        navigation.navigate('Dashboard')
    }



    return (
        <View style={styles.container}>
            <ImageBackground
            source={require('../img/bg.jpeg')}
            style={{ width: '100%', height: '100%' }}>
            <Text style={styles.topic}>BMAuto Care</Text>
            <View style={styles.inner} />
            <Text style={styles.lable}>
                {'100%'}
            </Text>
            <Text style={styles.headline}>
                <Text>Vehicle Condition</Text>
            </Text>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={predict}>
                <Text style={styles.submitButtonText}> Predict My Defects </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={history}>
                <Text style={styles.submitButtonText}> What's My History </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.sosButton}
                onPress={dashboard}>
                <Text style={styles.submitButtonText}> SOS Dashboard </Text>
            </TouchableOpacity>
            <Text style={styles.headline}>
                <Text>Connect With My Car?</Text>
            </Text>
            <Switch
                style={styles.toggle}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
            />
            </ImageBackground>
        </View >
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
        borderColor: '#deb887',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#deb887',
        textAlign: 'center',
        padding: 15,
        margin: 20,
        height: 50
    },
    sosButton: {
        backgroundColor: '#deb887',
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
        color : 'white'

    },
    link: {
        color: '#2CC021'
    },
    topic: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 30,
        color: 'white'
    },
    inner: {
        width: '80%',
        height: 30,
        borderRadius: 15,
        backgroundColor: 'green',
        alignSelf: 'center'
    },
    lable: {
        fontSize: 18,
        paddingTop: 90,
        color: 'black',
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center'
    },
    toggle: {
        alignSelf: 'center'
    }
})