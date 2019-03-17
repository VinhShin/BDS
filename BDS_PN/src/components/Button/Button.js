import React,{Component} from 'react';
import {
    View, 
    StyleSheet, 
    Text, 
    TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Button extends Component{

    static propTypes = {
        text:PropTypes.string.isRequired,
        backgroundColor:PropTypes.string.isRequired,
        textColor: PropTypes.string.isRequired,
    }

    render(){
        const {text,backgroundColor,textColor} = this.props;
        return(
            <TouchableWithoutFeedback onPress={this._onPressButton}>
                <View style={[styles.button,{backgroundColor:backgroundColor}]}>
                    <Text style={[styles.buttonText,{color:textColor}]}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
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
  