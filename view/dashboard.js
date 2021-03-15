import { statusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ImageBackground, Button, View, Text, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Dashboard({ navigation }) {

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



    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../img/bg.jpeg')}
                style={{ width: '100%', height: '100%' }}>
                <Text style={styles.topic}>SOS Dashboard</Text>
                <View style={styles.inner} />
                <Text style={styles.lable}>
                    {'100%'}
                </Text>
                <Text style={styles.headline}>
                    <Text>Vehicle Condition</Text>
                </Text>
                <Text style={styles.headline}>
                    <Text>Your Vehicle is : </Text>
                </Text>
                <Text style={styles.headline}>Vehicle Type</Text>
                <Text style={styles.headline}>xxxxxxxx</Text>
                <View style={styles.rectangle}></View>

                <View style={styles.btngroup}>
                    <View style={styles.buttonContainer}>

                        <Button
                            icon={{
                                name: "fa-phone",
                                size: 15,
                                color: "white",
                                backgroundColor: '#deb887'
                            }}
                            title="Phone"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            icon={{
                                name: "fas fa-sms",
                                size: 15,
                                color: "white",
                                backgroundColor: '#deb887'
                            }}
                            title="Message"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            icon={{
                                name: "fa-book",
                                size: 15,
                                color: "white",
                                backgroundColor: '#deb887'
                            }}
                            title="Phone Book"
                        />
                    </View>
                </View>

            </ImageBackground>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0
    },
    btngroup: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 465,
        height: 500
    },
    buttonContainer: {
        flex: 1,
        
    },

    input: {
        margin: 20,
        height: 40,
        paddingLeft: 10,
        borderColor: '#000000',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#deb887',
        textAlign: 'center',
        width: '50%',
        marginTop: 400,
    },
    sosButton: {
        backgroundColor: '#deb887',
        width: '50%',
        textAlign: 'center',
        marginLeft: '50%',
        marginTop: '-19.5%',
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
        fontSize: 30,
        color: 'white'
    },
    rectangle: {
        height: 350,
        width: 300,
        backgroundColor: '#deb887',
        position: 'absolute',
        zIndex: 99,
        marginLeft: 30,
        marginTop: 200
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
        paddingTop: 40,
        color: 'black',
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center'
    },
    navButton: {
        backgroundColor: '#deb887',
        width: '50%',
        height: 100,
        marginTop: 400
    },
    navButton2: {
        backgroundColor: '#deb887',
        width: '50%',
        height: 100,
        marginTop: 400
    }
})