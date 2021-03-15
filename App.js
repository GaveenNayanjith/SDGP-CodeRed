import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import Signin from './view/signin.js';
import Signup from './view/signup.js';
import Home from './view/home.js';
import Prediction from './view/prediction.js';
import History from './view/history.js';
import Dashboard from './view/dashboard.js';


const screens = {
   Signin: {
      screen: Signin
   },
   Signup: {
      screen: Signup
   },
   Home: {
      screen: Home
   },
   Prediction: {
      screen: Prediction
   },
   History: {
      screen: History
   },
   Dashboard: {
      screen: Dashboard
   }
}

const AppStackNavigator = createStackNavigator(screens)

export default createAppContainer(AppStackNavigator)