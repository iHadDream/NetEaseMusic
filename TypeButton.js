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
export default class TypeButton extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
        return <View style={styles.content}>
                    <View style={[styles.layout]}>
                        <View>
                            <View style={styles.img}>
                                <Image source={require('./img/fm.png')} style={styles.imgs}/>
                            </View>
                            <Text style={[styles.imgTxt]}>私人FM</Text>
                        </View>
                        <View>
                            <View style={styles.img}>
                                <Image source={require('./img/calendar.png')} style={styles.imgs}/>
                            </View>
                            <Text style={[styles.imgTxt]}>每日推荐</Text>
                        </View>
                        <View>
                            <View style={styles.img}>
                                <Image source={require('./img/music.png')} style={styles.imgs}/>
                            </View>
                            <Text style={[styles.imgTxt]}>歌单</Text>
                        </View>
                        <View>
                            <View style={styles.img}>
                                <Image source={require('./img/top.png')} style={styles.imgs}/>
                            </View>
                            <Text style={[styles.imgTxt]}>排行榜</Text>
                        </View>
                    </View>
               </View>
    }
}
const styles = StyleSheet.create({
        content:{
            height:80,
            marginTop:10,
            borderBottomWidth:1,
            borderBottomColor:'#ccc',
            padding:0,
        },
        img:{
            width:50,
            height:50,
            borderWidth:1,
            borderRadius:25,
            borderColor:'#d81e06',
        },
        imgs:{
            width:30,
            height:30,
            marginLeft:10,
            marginTop:8,
        },
        imgTxt:{
            marginTop:5,
            borderWidth:0,
            textAlign:'center'
        },
        imgTxt10:{
            marginLeft:20,
        },
        imgTxt20:{
            marginLeft:20,
        },
        imgTxt30:{
            marginLeft:30,
        },
        imgLayout:{
            marginLeft:20,
            marginRight:20,
        },
        textLayout:{
            marginLeft:15,
            marginRight:15,
        },
        layout:{
            flexDirection:'row',
            justifyContent:'space-around',
        },
    });