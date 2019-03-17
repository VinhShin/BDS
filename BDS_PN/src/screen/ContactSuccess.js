import React, {Component} from 'react';
import {  
    View, 
    Text, 
    Image,
} from 'react-native';

export default class ContactSuccess extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isChecked:false
        }
    }
    render(){
        return(
            <View style={{flex:1, marginBottom:150}}>
                <Image source = {require('../../image/ic_search.png')} style = {{width:30, height:30, margin:5}}/>
                <View style={{alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}>
                    <Image source = {require('../../image/ic_search.png')} style = {{width:30, height:30, margin:5}}/>
                    <View style = {{alignItems:"center"}}>
                        <Text style = {{fontSize:18,fontWeight:"bold"}}>Chúc mừng bạn đã gởi thành công</Text>
                    </View>
                    <View style={{alignSelf:"center", marginTop:10}}>
                        <Text>Cám ơn bạn đã liên hệ đến chúng tôi</Text>
                    </View>
                    <View style={{alignSelf:"center", marginTop:5}}>
                        <Text>Chúng tôi sẽ hồi âm sớm</Text>
                    </View>
                </View>
            </View>
        )
    }
}
