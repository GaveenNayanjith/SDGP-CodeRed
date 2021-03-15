import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'



export default function Signin({ navigation }) {

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
      navigation.navigate('Home')
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
            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Username"
               placeholderTextColor="white"
               autoCapitalize="none" />

            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Password"
               placeholderTextColor="white"
               autoCapitalize="none" />

            <TouchableOpacity
               style={styles.submitButton}
               onPress={login}>
               <Text style={styles.submitButtonText}> Sign In </Text>
            </TouchableOpacity>
            <Text style={styles.headline}>
               <Text>Are you new User? </Text>
               <Text style={styles.link} onPress={register}>Sign Up</Text>
            </Text>
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
      textAlign: "center",
      color: 'white'

   },
   link: {
      color: '#2CC021'
   }
})