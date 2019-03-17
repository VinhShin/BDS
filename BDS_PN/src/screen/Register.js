import React, {Component} from 'react';
import {  
    View, 
    ScrollView, 
    StyleSheet, 
} from 'react-native';
import CheckBox from 'react-native-check-box'
import {EditTextPass,EditTextTitle} from '../components/EditText';
import {Button} from "../components/Button"
import Toolbar from "../components/Toolbar/Toolbar"

export default class Register extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isChecked:false
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
               <Toolbar text = "MỞ TÀI KHOẢN"/>
                <ScrollView style = {{paddingHorizontal:20}}>
                    <EditTextTitle title={"Họ Tên"} placeHolder={"Nhập họ tên"}/>
                    <EditTextTitle title={"Số CMT/CC/HC"} placeHolder={"Nhập số chứng minh thư/căn cước/hộ chiếu"}/>
                    <EditTextTitle title={"Đại chỉ"} placeHolder={"Nhập địa chỉ"}/>
                    <EditTextTitle title={"Số điện thoại"} placeHolder={"0900990230"}/>
                    <EditTextTitle title={"Email"} placeHolder={"Nhập email"}/>
                    <EditTextTitle title={"Mã nhà đầu tư"} placeHolder={"Nhập mã đầu tư"}/>
                    <EditTextPass title={"Mật khẩu"} isShowNote={true}/>
                    <EditTextPass title={"Nhập lại mật khẩu"} isShowNote={false}/>
                    <CheckBox
                        onClick={()=>{
                            this.setState({
                                isChecked:!this.state.isChecked        
                            })
                        }}
                        isChecked={this.state.isChecked}
                        rightText={"Lưu mật khẩu"}
                    />
                    <View style={{marginVertical:25}}>
                        <Button text = {"ĐĂNG KÝ"} backgroundColor = "red" textColor =  "white" /> 
                    </View>
                </ScrollView>
                
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