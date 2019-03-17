import React,{Component} from 'react';
import {
    View, 
    StyleSheet, 
    Text, 
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ButtonImage extends Component{

    static propTypes = {
        text:PropTypes.string.isRequired,
        typeImage:PropTypes.string.isRequired
    }

    render(){
        const {text,typeImage} = this.props;
        return(
            <TouchableWithoutFeedback onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Image source={this.getIcon(typeImage)} style = {{padding:20, width:50, height:50}}  />
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    getIcon(type){
        return (require("../../../image/ic_search.png"))
    }

}

const styles = StyleSheet.create({
    button:{
        width:95,
        height:85,
        backgroundColor:"red",
        borderRadius:10,
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
  