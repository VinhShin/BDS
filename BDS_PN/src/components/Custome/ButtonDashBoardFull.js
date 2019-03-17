import React,{Component} from 'react';
import {
    View, 
    StyleSheet, 
    Text, 
    TouchableWithoutFeedback,
} from 'react-native';
import {ButtonImageFull} from "../Button"
export default class ButtonDashBoardFull extends Component{

    static propTypes = {
    }

    render(){
        const {text,backgroundColor,textColor} = this.props;
        return(
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{flex:1}}>
                    <ButtonImageFull text = "SẢN PHẨM" typeImage = "1" bgColor = "#626975"/>
                </View>
                <View style={{flex:1}}>
                    <ButtonImageFull text = "TIN TỨC" typeImage = "1"/>
                </View>
                <View style={{flex:1}}>
                    <ButtonImageFull text = "KIẾN THỨC" typeImage = "1"/>
                </View>

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
  