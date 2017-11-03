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
export default class Recommend extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
        return <View style={styles.content}>
                    <Text style={styles.recommendList}>推荐歌单 ></Text>
                    <View style={styles.layout}>

                        <Image source={{uri:'http://p1.music.126.net/o_abl3M8f-YS8O-PSavFaA==/109951163054028190.jpg?param=140y140'}}
                                                                    style={styles.img}/>
                        <Image source={{uri:'http://p1.music.126.net/gjfUxGs7RsjK8xf98uxctw==/109951163054082109.jpg?param=140y140'}}
                                                                    style={styles.img}/>
                        <Image source={{uri:'http://p1.music.126.net/Ok60ny4RKrIMw2kUEPnehw==/18499283139425125.jpg?param=140y140'}}
                                                                    style={styles.img}/>
                    </View>
                    <View style={[styles.layout,styles.listPadding]}>
                        <Text style={styles.listText}>17年十月最热...</Text>
                        <Text style={styles.listText}>青春记忆里的...</Text>
                        <Text style={styles.listText}>「秋风过境」感受...</Text>
                    </View>
                    <View style={styles.layout}>
                        <Image source={{uri:'http://p1.music.126.net/yBlPix0KUD6MKlahgql5yg==/19091919905156517.jpg?param=140y140'}}
                                                                    style={styles.img}/>
                        <Image source={{uri:'http://p1.music.126.net/ExX8_UtHusAErdAGPwBVJg==/19157890602745530.jpg?param=140y140'}}
                                                                    style={styles.img}/>
                        <Image source={{uri:'http://p1.music.126.net/vH6zAZ0Q1rTSerlgMf0jUA==/109951163041593141.jpg?param=140y140'}}
                                                                    style={styles.img}/>
                    </View>
                    <View style={[styles.layout,styles.listPadding]}>
                        <Text style={styles.listText}>17年十月最热...</Text>
                        <Text style={styles.listText}>青春记忆里的...</Text>
                        <Text style={styles.listText}>「秋风过境」感受...</Text>
                    </View>
               </View>
    }
}
const styles = StyleSheet.create({
        content:{
            marginTop:20,
        },
        recommendList:{
            paddingLeft:10,
            borderLeftWidth:2,
            borderLeftColor:'#d81e06',
            height:20,
            marginBottom:10
        },
        img:{
            width:126,
            height:126,
            zIndex:1,
        },
        layout:{
            flexDirection:'row',
            justifyContent:'space-between',
        },
        listText:{
            fontSize:12,
        },
        listPadding:{
            marginBottom:10
        },
        num:{
            position:'absolute',
            zIndex:10,
            left:40,
            color:'red',
        }
    });