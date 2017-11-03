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
export default class TouchableTest extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
        console.log('===render===')
        return <View>
               <TouchableWithoutFeedback
                onPress={() => Alert.alert(
                            'Alert Title',
                            'are u sure??',
                            [
                              {text: 'OK', onPress: () => console.log('OK Pressed!')},
                            ]
                          )}
                >
                <View>
                    <Text>click me</Text>
                </View>
               </TouchableWithoutFeedback>
               <Text>clcik:{this.state.count} time</Text>
               </View>
    }
}