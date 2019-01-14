/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Easing,StatusBar,Button,View,Text, StyleSheet, AppRegistry, Image, TouchableOpacity, Animated
} from 'react-native';
import TabbarView from './ios_app/TabbarView'



export default class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <View style={{flex: 1, backgroundColor: '#282828'}}>
                <StatusBar
                animated={true}
                hidden={false}
                barStyle={'light-content'}
                translucent={true}
                showHideTransition={'slide'}

            />
                <TabbarView></TabbarView>

            </View>

        )
    }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('News', () => News);
