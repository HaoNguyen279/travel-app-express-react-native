import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
const {width : screenWidth} = Dimensions.get("window");

const UserAvatar = () => {
  return (
    <View style={style.container}>
        <View style={style.boxWrapperOut}>
                <View style={style.box}>
                    <Image source={require('../assets/images/mark.jpg')} 
                    style={style.avatar}/>
                    <View style={style.onlineStatusWrapper}>
                        <View style={style.onlineStatus}></View>
                </View>
            </View>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1, justifyContent:'center', alignItems:'center', marginTop:10, marginBottom:10
    },
  box:{
    flexDirection : 'row',
    flex :1,
    backgroundColor : 'white',
    borderRadius : 999,
    padding : 4,
    justifyContent:'center',
    alignItems:'center'
  },
  boxWrapperOut:{
    backgroundColor : 'rgb(230, 230, 230)',
    padding : 4,
    borderRadius : 999,
    justifyContent:'center',
    alignItems:'center'
  },
  avatar:{
    width: screenWidth * 0.30, aspectRatio: 1, borderRadius: 999
  },
  name :{
    fontWeight : 600,
    fontSize : 17,
    padding : 1,
    marginBottom: 3
  },
  lastMessage : {
    fontWeight : 400,
    padding : 1,
    color : 'gray'
  },
  textBox:{
    paddingLeft:15,
    justifyContent:'center'
  },
  onlineStatus:{
    width : screenWidth * 0.03,
    aspectRatio : 1,
    borderRadius : 999,
    backgroundColor : 'rgb(64, 187, 71)'
  },
    onlineStatusWrapper:{
    width : screenWidth * 0.05,
    aspectRatio : 1,
    borderRadius : 999,
    backgroundColor : 'white',
    justifyContent : 'center',
    alignItems : 'center',
    position : 'absolute',
    bottom : screenWidth * 0.02,
    right : screenWidth * 0.02
  },
})

export default UserAvatar