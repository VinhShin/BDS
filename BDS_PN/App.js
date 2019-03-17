/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/screen/Login'
import Register from "./src/screen/Register"
import RegisterSuccess from './src/screen/RegisterSuccess'
import ContactSuccess from './src/screen/ContactSuccess'
import Introduct from './src/screen/Introduce'
import TermAndUse from './src/screen/TermAndUse'
import Contact from './src/screen/Contact'
import Product from './src/screen/Product'
import ProductDetail from './src/screen/ProductDetail'

export default class App extends Component {
  render() {
    return (
//       <Login/>
        // <Register/>
      //  <RegisterSuccess/>
        // <ContactSuccess/>
        // <Introduct/>
        // <TermAndUse/>
        //<Contact/>
        // <Product/>
        <ProductDetail/>
    );
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
