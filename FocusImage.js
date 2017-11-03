import React, { Component } from 'react';
import {
  Platform,
  PropTypes,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ScrollView,
  Animated,
  Dimensions,
  View,
  Alert,
  TouchableWithoutFeedback,
  TouchableHighLight,
} from 'react-native';

const styles = StyleSheet.create({
        container: {
                flex:1,
                flexDirection:'row',
            },
            circleContainer: {
                position:'absolute',
                left:0,
                top:120,
            },
            circle: {
                width:6,
                height:6,
                borderRadius:6,
                backgroundColor:'#f4797e',
                marginHorizontal:5,
            },
            circleSelected: {
                width:6,
                height:6,
                borderRadius:6,
                backgroundColor:'#ffffff',
                marginHorizontal:5,
            }
    });