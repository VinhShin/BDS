import React, {Component} from 'react';
import {  
    View, 
    TextInput, 
    Text, 
    Image,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

export default class EditTextIconRight extends Component{

    static propTypes = {
        icon:PropTypes.string.isRequired,
        placeHolder: PropTypes.string.isRequired,
    }
    render(){
        const {icon,placeHolder} = this.props;
        return(
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <TextInput style={styles.input}
                        placeholder={placeHolder}>
                    </TextInput>            
                    <Image source= {this.getUrl(icon)}  
                        style = {styles.iconSearch}/>
                </View>
            </View>
            
        )
    }
    getUrl(type){
        if(!type){
            return require("../../../image/ic_search.png")     
        }
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:"flex-end",
        marginTop:5,
        height:60,
        justifyContent:"center",
  
    },
    input:{
        width:"100%",
        height:40,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#000000'
    },
    iconSearch:{
        marginLeft:5,
        position:"absolute",
        width:23,
        height:23,
    },
  })
  