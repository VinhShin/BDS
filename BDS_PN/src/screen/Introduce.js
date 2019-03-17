import React, {Component} from 'react';
import {  
    View, 
    Text, 
    Image,
} from 'react-native';
import Toolbar from "../components/Toolbar/Toolbar"
import {ButtonFooter} from "../components/Custome"

export default class Introduce extends Component {
    render(){
        return(
            <View style={{flex:1}}>
               <Toolbar text = "GIỚI THIỆU"/>
               <View style = {{flex:1, justifyContent:"flex-end", marginBottom:10}}>
                   <ButtonFooter/>
               </View>
            </View>
        )
    }
}
