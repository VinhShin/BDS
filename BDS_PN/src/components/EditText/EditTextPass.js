import React, {Component} from 'react';
import {  
    View, 
    TextInput, 
    Text, 
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

export default class EditTextPass extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        isShowNote:PropTypes.bool.isRequired
    }

    render(){
        const {title,isShowNote} = this.props;
        return(
            <View style={{flex:1, marginVertical:5, }}>
                <Text>{title}</Text>
                <TextInput style={styles.input}
                    placeholder={"********"}>
                </TextInput>    
                { this.showNote(isShowNote)}          
            </View>
            
        )
    }
    showNote(showNote){
        if(showNote){
            return (
                <Text style={styles.note}>8-16 ký tự</Text>                  
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:5,
        height:60,
        justifyContent:"center",
  
    },
    input:{
        paddingLeft:-10,
        width:"100%",
        height:40,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
    },
    note:{
        marginTop:30,
        width:"100%",
        textAlign:"right",
        position:"absolute",
    }
  })
  