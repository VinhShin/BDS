import React, {Component} from 'react';
import { AppRegistry, 
    View, 
    TextInput, 
    StyleSheet, 
    Text, 
    ScrollView,
    Image,
    ImageBackground,
    TouchableWithoutFeedback,
} from 'react-native';
import CheckBox from 'react-native-check-box'
import {Button} from "../components/Button"
import {ButtonDashBoard} from "../components/Custome"
import {EditTextIcon} from "../components/EditText"

export class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isChecked:false
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <ImageBackground source={require('../../image/bg.jpg')} style={styles.backgroundImage}>
                    <ScrollView style={{paddingHorizontal:20}}>
                        <Image source={require('../../image/logo.png')} style = {styles.logo}  />
                        <EditTextIcon placeHolder = "Mã nhà đầu tư" icon = "code_investor"/>
                        <EditTextIcon placeHolder = "Mật khẩu" icon = "pass"/>
                        <View style = {{marginVertical:7}}>
                            <CheckBox
                                    onClick={()=>{
                                        this.setState({
                                            isChecked:!this.state.isChecked        
                                        })
                                    }}
                                    checkBoxColor = {"white"}
                                    rightTextStyle = {{color:"white"}}
                                    isChecked={this.state.isChecked}
                                    rightText={"Lưu mật khẩu"}
                                /> 
                        </View>
                        <View style={{marginVertical:10}}>
                            <Button text = {"ĐĂNG NHẬP"} backgroundColor = "red" textColor = "white" /> 
                        </View>
                        <View style={{marginVertical:10}}>
                            <Button text = {"MỞ TÀI KHOẢN"} backgroundColor = "white" textColor = "black" /> 
                        </View>
                        <View>
                            <Text style={{alignSelf:"center", color:"white"}}>Quên mật khẩu</Text>
                        </View>
                        <View style={{height:100, width:"100%", marginTop:20}}>
                            <ButtonDashBoard/>
                        </View>
                        <View style={{width:"100%", flexDirection: 'row', justifyContent:"center"}}>
                                <Text style={{color:"white"}}>Điểu khoản</Text>
                                <Text style={{color:"white"}}> | </Text>
                                <Text style={{color:"white"}}>Liên hệ</Text>
                                <Text style={{color:"white"}}> | </Text>
                                <Text style={{color:"white"}}>Hướng dẫn</Text>
                        </View>
                        <View style={{width:"100%", justifyContent:"center", marginBottom:20}}>
                            <Text style={{color:"white"}}>Bản quyền thuộc Công ty TNHH BDS Phú Nguyên</Text>
                        </View>            
                    </ScrollView> 
                </ImageBackground>             
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
    },
    logo:{
        alignSelf:"center",
        width:200,
        height:200,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    checkox:{
        color:"white"
    }
  })
  
export default Login;