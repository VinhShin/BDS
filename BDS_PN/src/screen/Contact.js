import React, {Component} from 'react';
import {  
    View, 
    Text,
    ScrollView, 
    StyleSheet, 
} from 'react-native';
import CheckBox from 'react-native-check-box'
import {EditTextTitleMutiLine,EditTextTitle} from '../components/EditText';
import {Button} from "../components/Button"
import {ButtonFooter} from "../components/Custome"
import Toolbar from "../components/Toolbar/Toolbar"

export default class Contact extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isChecked:false
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
               <Toolbar text = "LIÊN HỆ"/>
                <ScrollView style = {{paddingHorizontal:20}}>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>Vui lòng nhập thông tin</Text>
                    <EditTextTitle title={"Họ Tên"} placeHolder={"Nhập họ tên"}/>
                    <EditTextTitle title={"Email"} placeHolder={"abc@gmail.com"}/>
                    <EditTextTitle title={"Số điện thoại"} placeHolder={"0900990230"}/>
                    <EditTextTitleMutiLine title = {"Nội dung"} placeHolder={"Nhập nội dung"}/>
                    <View style={{marginVertical:25}}>
                        <Button text = {"GỞI"} backgroundColor = "red" textColor =  "white" /> 
                    </View> 
                </ScrollView>
                <View style={{flex:1,justifyContent:"flex-end"}}>
                        <ButtonFooter/>
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
        paddingLeft:30,
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
    button:{
        marginTop:25,
        fontWeight:'bold',
        width:"100%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        alignItems: 'center',
    },
    buttonText: {
        fontSize:15,
        alignSelf: 'stretch',
        textAlign:"justify",
        fontWeight:"bold",
        alignSelf: 'center'
    }
  })