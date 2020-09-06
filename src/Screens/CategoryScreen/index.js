import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions,FlatList, ToastAndroid, Linking, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { myConfig } from '../../../config';
import styles from './style'

const API = myConfig.URL;

const {width,height} = Dimensions.get("window");


export default class MapViewScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam("catName")
        }
      };

    state= {
            data:[],
        };



    async componentDidMount() {
        this.loadData();
    }

    loadData = async () => {

        var text1 = this.props.navigation.getParam("catName");
        var params1 = 'term='+text1.replace(/ /, '+')+'&media=movie'+'&limit=10&entity=movie'

        await axios({
            method: 'post',
            url: API + 'search?'+params1,
            headers: {
              'content-type': 'application/json; charset=utf-8',
            },
          }).then(async res => {
        
             console.log(JSON.stringify(res.data.results))
             this.setState({ data: res.data.results });       
       
           
        
          })
            .catch(err => {
        
              ToastAndroid.show(err.response,ToastAndroid.LONG)
              console.log("err"+err)
        
            })
    }


    render(){
        return (
            
            <View style={styles.container}>
                <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index}
                ListEmptyComponent={()=><View><Text>Loading!</Text></View>}
                ItemSeparatorComponent={()=><View style={{height:18}}></View>}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={{justifyContent:'space-between'}}
            
                renderItem={({item}) => {
                    var image = item.artworkUrl100.substring(0,item.artworkUrl100.lastIndexOf('/') + 1)+"/400x400bb.jpg";
                    return (
                         <View style={styles.itemContainer}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate("ProductScreen",{product:item})}>
                                    <Image style={{width:width/2,height:250}} source={{uri:image}} />
                                </TouchableOpacity>
                                <Text style={{textAlign:"left", width:width/2,paddingLeft:12,paddingTop:8}}>USD {item.trackPrice}</Text>
                                <Text numberOfLines={1} style={{textAlign:"left", width:width/2,paddingLeft:12}}>{item.trackName}</Text>

                         </View>                            
                        )
                }}
                />
            </View>
        );
    }
}
