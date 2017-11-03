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
import FocusImage from './FocusImage';
/*
ES6
*/
var screenWidth = Dimensions.get('window').width;
export default class App extends Component{
    constructor(props){
        super(props);
        this.onNaviBarPress = this.onNaviBarPress.bind(this);
    }
    render(){
        var naviStatus = [1,0,0,0];
        return(
            <View>
                <FirstBar />
                <SecondBar naviBarStatus={naviStatus}
                           onNaviBarPress={this.onNaviBarPress}/>

                <Image source={require('./img/33.png')}  style={{width:screenWidth,height:150}}/>
                <TypeButton/>
                <Recommend/>
            </View>
        );
    }
    onNaviBarPress(aNumber){
        switch(aNumber){
            case 0:
                return;
            case 1:
                this.props.navigator.replace({
                    name:'Video'
                });
            case 2:
                this.props.navigator.replace({
                    name:'Radio'
                });
                return;
        }
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
