import React, {Component} from 'react';
import {  
    View, 
    Text,
    Image, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export default class Toolbar extends Component{

    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    render(){
        const {text} = this.props;
        return(
            <View style = {styles.container}> 
                <TouchableOpacity activeOpacity = { .5 }>
                    <Image source={require("../../../image/ic_search.png")} style = {styles.imageClass}/>
                </TouchableOpacity>
                <Text style={styles.titleStyle}>{text}</Text>
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:50,
        backgroundColor:"red",
        flexDirection:"row",
        alignItems: 'center',
    },
    titleStyle:{
        fontWeight:"bold",
        position:"absolute",
        width:"100%",
        color:"white",
        flex:2,
        textAlign:'center',
        fontSize:18,
    },
    imageClass:{
        width: 40,
        height: 40
    },
  })
  