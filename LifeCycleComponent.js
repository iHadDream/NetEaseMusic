import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  Image,
  View,
} from 'react-native';
export default class LifeCycleComponent extends Component{
    constructor(props){
        super(props);
        console.log('===constructor===')
        this.state={
            count:0,
        }
    }
    componentWillMount(){
        console.log('===componentWillMount===')
    }
    componentDidMount(){
        console.log('===componentDidMount===')
    }
    componentWillReceiveProps(nextProps){
        console.log('===componentWillReceiveProps===')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('===shouldComponentUpdate===')
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('===componentWillUpdate===')
    }
    componentDidUpdate(prevProps,prevState){
        console.log('===componentDidUpdate===')
    }
    componentWillUnmount(){
        console.log('===componentWillUnMount===')
    }
    render(){
        console.log('===render===')
        return <View>
            <Text
                style={{fontSize:20,backgroundColor:'red'}}
                onPress={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>我是生命周期</Text>
                <Text>点击了{this.state.count}次</Text>
        </View>
    }
}