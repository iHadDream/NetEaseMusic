import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  Image,
  View,
  Alert,
  TouchableWithoutFeedback,
  TouchableHighLight,
} from 'react-native';
export default class FirstBar extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
        return <View>
                 <View style={styles.layout}>
                   <Image source={require('./img/menu.png')}
                                           style={styles.img}/>
                   <View style={styles.center}>
                        <Image source={require('./img/icon-music-note.png')}
                                               style={[styles.img]}/>
                       <Image source={require('./img/wangyiyun.png')}
                                               style={styles.img}/>
                       <Image source={require('./img/people.png')}
                                               style={styles.img}/>
                   </View>

                   <Image source={require('./img/search.png')}
                                           style={styles.img}/>
                 </View>
               </View>
    }
    buttonPressed(){
           console.log("press");
    }
}
const styles = StyleSheet.create({
        Content:{
            height:70,
        },
        img:{
            width:24,
            height:24,
        },
        center:{
            width:200,
            flexDirection:'row',
            justifyContent:'space-around',
        },
        right:{

        },
        layout:{
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:'#d81e06',
            height:30,
        }
    });