/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert
} from 'react-native';

var MyObjcClass = require('NativeModules').MyObjcClass;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      {MyObjcClass.greeting}
      </Text>
      <TextInput style={styles.input} onChangeText={(text) => this.squareMe(text)}/>
      <Text style={styles.result}>
      {this.state.number}
      </Text>
      </View>
    );
  }

  squareMe(num) {
    if (num == '') {
      return;
    }
    MyObjcClass.squareMe(num, (error, number) => {
      if (error) {
        console.error(error);
      } else {
        this.setState({number: number});
      }
    })
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  input: {
    width: 100,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'center'
  },
  result: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
});
