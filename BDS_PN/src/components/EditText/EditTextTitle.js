import React, {Component} from 'react';
import {  
    View, 
    TextInput, 
    Text, 
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

export default class EditTextTitle extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        placeHolder:PropTypes.string.isRequired
    }

    render(){
        const {title,placeHolder} = this.props;
        return(
            <View style={{flex:1,marginVertical:5}}>
                <View>
                    <Text>{title}</Text>
                    <TextInput style={styles.input}
                        placeholder={placeHolder}>
                    </TextInput>                                
                </View>
            </View>
            
        )
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
  })
  
