import React,{Component} from 'react';
import {
    View, 
    StyleSheet, 
    Text, 
    TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ButtonText extends Component{

    static propTypes = {
        text:PropTypes.string.isRequired,
        textColor: PropTypes.string.isRequired,
        textSize: PropTypes.number.isRequired
    }

    render(){
        const {text,textColor, textSize} = this.props;
        return(
            <TouchableWithoutFeedback onPress={this._onPressButton}>
                <Text style={[styles.buttonText,{color:textColor}, {fontSize:textSize}]}>{text}</Text>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    buttonText: {
        alignSelf: 'stretch',
        textAlign:"justify",
        fontWeight:"900",
        alignSelf: 'center'
    }
  })
  