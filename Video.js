/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  Image,
  View,
} from 'react-native';
import Dimensions from 'Dimensions';
import LifeCycleComponent from './LifeCycleComponent';
import TouchableTest from './TouchableTest';
import FirstBar from './FirstBar';
import SecondBar from './SecondBar';
import TypeButton from './TypeButton';
import Recommend from './Recommend';
/*
ES6
*/
var screenWidth = Dimensions.get('window').width;
export default class Video extends Component{
    constructor(props){
        super(props);
        this.state=({
            remove:false
        })
    }
    render(){
        var view = this.state.remove ? null:<LifeCycleComponent/>;
        return(
            <View>
                <FirstBar />
                <SecondBar />
                <Image source={require('./img/33.png')}  style={{width:screenWidth,height:150}}/>
            </View>
        );
    }
}

/*
ES5
react16.0 remove createClass
*/
/*var App = React.createClass({
    render(){
        return(
            <Text>By???</Text>
        );
    }
})*/

/*function
*/
/*
function App(){
    return(
        <Text>Bye</Text>
    );
}
module.exports = App;*/
