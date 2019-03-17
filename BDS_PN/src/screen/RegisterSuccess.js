import React, {Component} from 'react';
import {  
    View, 
    Text, 
    Image,
} from 'react-native';
import {Button, ButtonText} from "../components/Button"

export default class RegisterSuccess extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isChecked:false
        }
    }
    render(){
        return(
            <View style={{flex:1, marginBottom:120}}>
                <Image source = {require('../../image/ic_search.png')} style = {{width:30, height:30, margin:5}}/>
                <View style={{alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}>
                    <Image source = {require('../../image/ic_search.png')} style = {{width:30, height:30, margin:5}}/>
                    <View style = {{alignItems:"center"}}>
                        <Text style = {{fontSize:18,fontWeight:"bold"}}>Chúc mừng bạn đã đăng ký</Text>
                        <Text style = {{fontSize:18,fontWeight:"bold"}}>Thành công</Text>
                    </View>
                    <View style = {{flexDirection:"row", justifyContent:"center", marginTop:25}}>
                        <Text>Vui lòng click vào </Text>
                        <ButtonText text="Vào đây " textColor="black" textSize={13}/>
                        <Text>xem thông tin cá nhân.</Text>
                    </View>
                    <View style={{alignSelf:"center", marginTop:7}}>
                        <Text>Hoặc click vào nút bên dưới xem</Text>
                    </View>
                    <View style={{alignSelf:"center", marginTop:7}}>
                        <Text>Sản phẩm của chúng tôi</Text>
                    </View>
                    <View style={{width:200, alignSelf:"center", marginTop:30}}>
                        <Button text = {"SẢN PHẨM"} backgroundColor = "red" textColor = "white" /> 
                    </View>
                </View>
            </View>
        )
    }
}
