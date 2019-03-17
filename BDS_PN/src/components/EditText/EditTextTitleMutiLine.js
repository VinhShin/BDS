import React, {Component} from 'react';
import {  
    View, 
    TextInput, 
    Text, 
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

export default class EditTextTitleMutiLine extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        placeHolder:PropTypes.string.isRequired
    }

    render(){
        const {title,placeHolder} = this.props;
        return(
            <View style={{flex:1,marginVertical:5}}>
                <Text>{title}</Text>
                <TextInput style={styles.input}
                    multiline={true}
                    placeholder={placeHolder}>
                </TextInput>    
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:5,
        height:60,
    },
    input:{
        textAlignVertical:"top",
        paddingLeft:-10,
        width:"100%",
        height:100,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
    },
  })
  
