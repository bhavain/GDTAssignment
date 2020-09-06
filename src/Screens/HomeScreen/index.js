import React,{Component} from 'react';
import {View, Text, FlatList, Image, ToastAndroid, TouchableOpacity, Dimensions, SectionList} from 'react-native';
import axios from 'axios';
import { myConfig } from '../../../config';
import styles from './style'


const API = myConfig.URL;
const {width,height} = Dimensions.get("window");

export default class Home extends Component {

    state={
        data:[],
        refreshing:true
    }

   
    componentDidMount(){
        this.loadData();
    }

    loadData = async () => {


        var text1 = "Indiana Jones";
        var params1 = 'term='+text1.replace(/ /, '+')+'&media=movie'+'&limit=4&entity=movie'

        await axios({
            method: 'post',
            url: API + 'search?'+params1,
            headers: {
              'content-type': 'application/json; charset=utf-8',
            },
          }).then(async res => {
        
             //console.log(JSON.stringify(res.data.results))
             let data = [ ...this.state.data ];
             data.push({title: text1, data: [res.data.results]});
             this.setState({ data });       
       
           
        
          })
            .catch(err => {
        
              ToastAndroid.show(err.response,ToastAndroid.LONG)
              console.log("err"+err)
        
            })

        var text2 = "Marvel";
        var params2 = 'term='+text2.replace(/ /, '+')+'&media=movie'+'&limit=4&entity=movie'

        await axios({
            method: 'post',
            url: API + 'search?'+params2,
            headers: {
              'content-type': 'application/json; charset=utf-8',
            },
          }).then(async res => {
        
             //console.log(JSON.stringify(res.data.results))
             let data = [ ...this.state.data ];
             data.push({title: text2, data: [res.data.results]});
             this.setState({ data }); 
       
       
           
        
          })
            .catch(err => {
        
              ToastAndroid.show(err.response,ToastAndroid.LONG)
              console.log("err"+err)
        
            })
        var text3 = "DC";
        var params3 = 'term='+text3.replace(/ /, '+')+'&media=movie'+'&limit=4&entity=movie'

        await axios({
            method: 'post',
            url: API + 'search?'+params3,
            headers: {
              'content-type': 'application/json; charset=utf-8',
            },
          }).then(async res => {
        
             //console.log(JSON.stringify(res.data.results))
             let data = [ ...this.state.data ];
             data.push({title: text3, data: [res.data.results]});
             this.setState({ data }); 
       
       
           
        
          })
            .catch(err => {
        
              ToastAndroid.show(err.response,ToastAndroid.LONG)
              console.log("err"+err)
        
            })
        var text4 = "Star Wars";
        var params4 = 'term='+text4.replace(/ /, '+')+'&media=movie'+'&limit=4&entity=movie'

        await axios({
            method: 'post',
            url: API + 'search?'+params4,
            headers: {
              'content-type': 'application/json; charset=utf-8',
            },
          }).then(async res => {
        
             //console.log(JSON.stringify(res.data.results))
             let data = [ ...this.state.data ];
             data.push({title: text4, data: [res.data.results]});
             this.setState({ data }); 
       
       
           
        
          })
            .catch(err => {
        
              ToastAndroid.show(err.response,ToastAndroid.LONG)
              console.log("err"+err)
        
            })
        var text5 = "Jurassic Park";
        var params5 = 'term='+text5.replace(/ /, '+')+'&media=movie'+'&limit=4&entity=movie'

        await axios({
            method: 'post',
            url: API + 'search?'+params5,
            headers: {
              'content-type': 'application/json; charset=utf-8',
            },
          }).then(async res => {
        
             //console.log(JSON.stringify(res.data.results))
             let data = [ ...this.state.data ];
             data.push({title: text5, data: [res.data.results]});
             this.setState({ data });
       
       
           
        
          })
            .catch(err => {
        
              ToastAndroid.show(err.response,ToastAndroid.LONG)
              console.log("err"+err)
        
            })
    }


    render(){
        return (
            <View style={styles.container}>
                <SectionList 
                sections={this.state.data}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={styles.sectionHeader}>
                    <Text style={styles.header}>{title}</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("CategoryScreen",{catName:title})} 
                                      style={{justifyContent:"center"}}>
                        <Text style={{color:"blue",fontSize:14}}>See All</Text>
                    </TouchableOpacity>
                    </View>
                  )}
                keyExtractor={(item, index) => index}
                //ListEmptyComponent={()=><View><Text>No Songs!</Text></View>}
                ItemSeparatorComponent={()=><View style={{height:12}}></View>}
                showsVerticalScrollIndicator={false}
                SectionSeparatorComponent={()=><View style={{height:12}}></View>}
                //contentContainerStyle={{justifyContent:'space-between',flexWrap:"wrap"}}
                //stickySectionHeadersEnabled={true}
                renderItem={({item}) => {
                    return (
                        <FlatList
                            data={item}
                            keyExtractor={(item, index) => index}
                            ItemSeparatorComponent={()=><View style={{height:6}}></View>}
                            numColumns={2}
                            columnWrapperStyle={{justifyContent:'space-between'}}
                            renderItem={({ item }) => {
                            var image = item.artworkUrl100.substring(0,item.artworkUrl100.lastIndexOf('/') + 1)+"/400x400bb.jpg";
                            return (
                                <TouchableOpacity style={styles.itemContainer} onPress={()=>this.props.navigation.navigate("ProductScreen",{product:item})}>
                                    <Image style={{width:width/2,height:250}} source={{uri:image}} />
                                </TouchableOpacity>  
                            )}                          
                            }
                            />
                        
                        )
                }}
                />
            </View>
        )
    }
}  
  
  
  
  