import React,{Component} from 'react';
import {
    View, 
    StyleSheet, 
    Text, 
    TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import {ButtonImage} from "../Button"
export default class ButtonDashBoard extends Component{

    static propTypes = {
    }

    render(){
        const {text,backgroundColor,textColor} = this.props;
        return(
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <ButtonImage text = "SẢN PHẨM" typeImage = "1"/>
                <ButtonImage text = "TIN TỨC" typeImage = "1"/>
                <ButtonImage text = "KIẾN THỨC" typeImage = "1"/>
           </View> 
        )
    }
}

const styles = StyleSheet.create({
    button:{
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
  