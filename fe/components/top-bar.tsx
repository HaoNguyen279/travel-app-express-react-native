import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { TopBarProps } from '@/constants/top-bar-props';

const TopBar = (props: TopBarProps) => {
    const navigation = useNavigation();
  return (
    <View style={style.container}>
        <Pressable onPress={() => navigation.goBack()} style={style.iconVector}>
            <Ionicons name="arrow-back" size={32} color="black" />
        </Pressable>
        <Text style={style.title}>{props.title}</Text>
        <Pressable style={style.iconVector}>
            <SimpleLineIcons name="options-vertical" size={24} color="black" />
        </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignContent : 'center',
        alignItems :'center',
    },
    title:{
        fontWeight : 700,
        fontSize : 22,
    },
    iconVector : {
        padding : 5,
        margin : 5,
        // backgroundColor: 'red'
    }

})

export default TopBar