import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack';

import HomeScreen from './src/Screens/HomeScreen'
import CategoryScreen from './src/Screens/CategoryScreen'
import ProductScreen from './src/Screens/ProductScreen'




const AppStackNavigator = createStackNavigator({
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: { title: "Home" } 
    },
    CategoryScreen: {
        screen: CategoryScreen
      },
      ProductScreen: {
        screen: ProductScreen,
      },                          
  },
    {
      initialRouteName: "HomeScreen", 
      defaultNavigationOptions: ({ navigation, screenProps }) => ({
        title: <Text></Text>,
        headerTitleStyle:{fontSize:20,color:"black"},
        headerStyle: [{ height: 56, elevation:0 }],
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        
        }),
      headerMode: "float",
    },
   
  
  )
  const AppContainer = createAppContainer(AppStackNavigator);
  export default AppContainer;  