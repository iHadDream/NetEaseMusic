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
  TouchableOpacity,
} from 'react-native';
var Dimensions = require('Dimensions');
var totalWidth = Dimensions.get('window').width;
let naviButtonWidth = totalWidth / 3;
let naviButtonHeight = naviButtonWidth * 0.75;
export default class SecondBar extends Component{
    constructor(props){
        super(props);
        this._tab0Pressed = this._tab0Pressed.bind(this);
        this._tab1Pressed = this._tab1Pressed.bind(this);
        this._tab2Pressed = this._tab2Pressed.bind(this);
    }
    _tab0Pressed(){
        this.props.onNaviBarPress(0);
    }
    _tab1Pressed(){
        this.props.onNaviBarPress(1);
    }
    _tab2Pressed(){
        this.props.onNaviBarPress(2);
    }
    render(){
        var buttonColors = this.props.naviBarStatus.map(function(aNumber){
            if(aNumber == 0) return 'white';
            return 'gray';
        })
        return <View>
                  <View style={styles.layout}>
                    <TouchableOpacity onPress={this._tab0Pressed}>
                        <Text style={[styles.center,styles.redBottom]}>音乐</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._tab1Pressed}>
                        <Text style={[styles.center]}>视频</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._tab2Pressed}>
                        <Text style={[styles.center]}>电台</Text>
                    </TouchableOpacity>
                  </View>
               </View>
    }
}
const styles = StyleSheet.create({
        layout:{
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            height:30,
            borderWidth:0,
            borderColor:'gray',

        },
        center:{
            marginTop:5,
            textAlign:'center',
            height:25,
            width:65,
        },
        redBottom:{
            borderBottomWidth:2,
            borderBottomColor:'#d81e06',
            color:'#d81e06',
        }
    });