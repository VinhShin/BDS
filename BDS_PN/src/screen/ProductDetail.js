import React, {Component} from 'react';
import {  
    View, 
    Text, 
    Image,
    ScrollView
} from 'react-native';
import Toolbar from "../components/Toolbar/Toolbar"
import {ButtonFooter} from "../components/Custome"
import {Button} from "../components/Button"
import {EditTextIconRight} from "../components/EditText"

export default class ProductDetail extends Component {
    render(){
        return(
            <View style={{flex:1}}>
               <Toolbar text = "MÃ BĐS: MT01"/>
               <ScrollView >
                   <Text style={{backgroundColor:"#d6e4f9", width:"100%", height:10}}/>
                    <View style={{paddingHorizontal:20}}>
                        <Text style={{marginVertical:10}}>Chọn mức đầu tư:</Text>
                        <EditTextIconRight placeHolder = "Chọn mức đầu tư"/>
                        <View style={{ marginBottom:30}}>
                            <Button text = {"QUYẾT ĐỊNH ĐẦU TƯ"} backgroundColor = "red" textColor = "white" /> 
                        </View>
                    </View>
               </ScrollView>
               <View style = {{flex:1, justifyContent:"flex-end", marginBottom:10}}>
                    
                    <ButtonFooter/>
               </View>
            </View>
        )
    }
}
