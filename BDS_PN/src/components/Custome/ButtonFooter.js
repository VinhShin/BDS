import React,{Component} from 'react';
import {
    View, 
    StyleSheet, 
    Text, 
    TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import {ButtonImageSmall} from '../Button/'

export default class ButtonFooter extends Component{

    static propTypes = {
    }

    render(){
        return(
                <View style={{flexDirection:"row", justifyContent:"space-around", borderTopWidth:1}}>
                            <ButtonImageSmall text = "Thông báo" typeImage = "1"/>
                            <ButtonImageSmall text = "Tài sản" typeImage = "1"/>
                            <ButtonImageSmall text = "Trạng chủ" typeImage = "1"/>
                            <ButtonImageSmall text = "Cả nhân" typeImage = "1"/>
                            <ButtonImageSmall text = "Cài đặt" typeImage = "1"/>
                </View>
         )
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"red",
        borderRadius:10,
        fontWeight:'bold',
        width:"100%",
        height:55,
        alignItems:"center",
        justifyContent:"center",
        alignItems: 'center',
    },
    buttonText: {
        fontSize:20,
        alignSelf: 'stretch',
        textAlign:"justify",
        fontWeight:"900",
        alignSelf: 'center'
    }
  })
  