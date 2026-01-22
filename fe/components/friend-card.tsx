import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { FriendCardProps } from '@/constants/friend-card-props';
const {width : screenWidth} = Dimensions.get("window");

const FriendCard = (props : FriendCardProps) => {
  return (
    <Pressable style={style.box}>
      <View>
        <Image source={require('../assets/images/mark.jpg')} 
        style={style.avatar}></Image>
        <View style={style.onlineStatusWrapper}>
          <View style={style.onlineStatus}></View>
        </View>
      </View>
      <View style={style.textBox}>
        <Text style={style.name}>Mark Zuckerberg</Text>
        <Text style={style.lastMessage}>last meessage - yesterday</Text>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  box:{
    flexDirection : 'row', flex :1, paddingLeft : screenWidth * 0.05 ,paddingBottom : screenWidth * 0.02, paddingTop : screenWidth * 0.02
  },
  avatar:{
    width: screenWidth * 0.15, aspectRatio: 1, borderRadius: screenWidth * 0.09 
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
    width : screenWidth * 0.02,
    aspectRatio : 1,
    borderRadius : screenWidth * 0.01,
    backgroundColor : 'rgb(64, 187, 71)'
  },
    onlineStatusWrapper:{
    width : screenWidth * 0.03,
    aspectRatio : 1,
    borderRadius : screenWidth * 0.015,
    backgroundColor : 'white',
    justifyContent : 'center',
    alignItems : 'center',
    position : 'absolute',
    bottom : 3,
    right : 3
  },
})

export default FriendCard