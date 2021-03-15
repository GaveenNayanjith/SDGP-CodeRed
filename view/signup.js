import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { ImageBackground, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Signup extends Component {
    state = {
        name: '',
        contact: '',
        vehicle_model: '',
        vehicle_registration_number: '',
        username: '',
        password: ''
    }
    handleName = (text) => {
        this.setState({ name: Text })
    }
    handleContact = (text) => {
        this.setState({ contact: text })
    }
    handleVehicleModel = (text) => {
        this.setState({ vehicle_model: text })
    }
    handleVehicleRegistrationNumber = (text) => {
        this.setState({ vehicle_registration_number: text })
    }
    handleUsername = (text) => {
        this.setState({ username: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    register = (username, password) => {
        alert('You can register!')
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../img/bg.jpeg')}
                    style={{ width: '100%', height: '100%' }}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Name"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        onChangeText={this.handleName} />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Contact Number"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        onChangeText={this.handleContact} />
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Vehicle Model"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        onChangeText={this.handleVehicleModel} />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Vehicle Reg Number"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        onChangeText={this.handleVehicleRegistrationNumber} />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Username"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        onChangeText={this.handleUsername} />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        onChangeText={this.handlePassword} />

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.register(this.state.username, this.state.password)
                        }>
                        <Text style={styles.submitButtonText}> Sign Up </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}
export default Signup

const styles = StyleSheet.create({
    container: {
        paddingTop: 0
    },

    input: {
        margin: 20,
        height: 40,
        paddingLeft: 10,
        borderColor: '#deb887',
        borderWidth: 1,
        color: 'white'
    },
    submitButton: {
        backgroundColor: '#deb887',
        textAlign: 'center',
        padding: 10,
        margin: 20,
        height: 40
    },
    submitButtonText: {
        textAlign: 'center',
        color: 'white'
    },
    headline: {
        textAlignVertical: "center",
        textAlign: "center"

    },
    link: {
        color: '#2CC021'
    }
})