import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, StyleSheet, Dimensions,FlatList, ToastAndroid, Linking, ActivityIndicator, StatusBar } from 'react-native';
import axios from 'axios';
import styles from './style'
import {  CardStyleInterpolators, TransitionSpecs  } from 'react-navigation-stack';

const {width,height} = Dimensions.get("window");
export default class MapViewScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam("product").trackName,
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          gestureEnabled: true,
          gestureDirection: 'vertical',
          transitionSpec: {
            open: TransitionSpecs.RevealFromBottomAndroidSpec ,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec ,
          },
        }
      };



    render(){
        var product = this.props.navigation.getParam("product");
        var image = product.artworkUrl100.substring(0,product.artworkUrl100.lastIndexOf('/') + 1)+"/400x400bb.jpg";

        return (
            
            <ScrollView style={styles.container}>
                <StatusBar translucent backgroundColor='transparent'/>
                <View>
                    <Image style={{width:width,height:height/2}} source={{uri:image}} resizeMode="cover"/>  
                    <TouchableOpacity style={styles.close_button_style}  onPress={() => { this.props.navigation.goBack(null)
                                                                                            
                                                                                            }}>
                        <Image style={{width:17,height:17}} source={require('../../../assets/images/close.png')} resizeMode="contain"/>  
                    </TouchableOpacity>                 
                </View>
                <View style={styles.product}>
                <Text style={styles.header}>{product.trackName}</Text>

                <Text style={styles.productDescription}><Text style={{fontWeight:"bold",fontSize:18}}>Movie Summary: </Text>
                        {product.longDescription}</Text>
                </View>

            </ScrollView>
        );
    }
}

