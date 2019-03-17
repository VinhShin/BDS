import React,{Component} from 'react';
import {
    View, 
    StyleSheet, 
    Text, 
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ButtonImageFull extends Component{

    static propTypes = {
        bgColor:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
        typeImage:PropTypes.string.isRequired
    }

    render(){
        const {text,typeImage,bgColor} = this.props;
        return(
            <TouchableWithoutFeedback onPress={this._onPressButton}>
                <View style={[styles.button,{backgroundColor: this.getBackgroundColor(bgColor)}]}>
                    <Image source={this.getIcon(typeImage)} style = {{padding:20, width:50, height:50}}  />
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    getBackgroundColor(bgColor){
        if(bgColor){
            return bgColor;
        }
        return "gray";

    }

    getIcon(type){
        return (require("../../../image/ic_search.png"))
    }

}

const styles = StyleSheet.create({
    button:{
        height:90,
        fontWeight:'bold',
        alignItems:"center",
        justifyContent:"center",
        alignItems: 'center',
    },
    buttonText: {
        color:"white",
        fontSize:15,
        alignSelf: 'stretch',
        textAlign:"justify",
        fontWeight:"900",
        alignSelf: 'center'
    }
  })
  