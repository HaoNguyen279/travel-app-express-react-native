import { ScrollView, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import FriendCard from '@/components/friend-card'
import TopBar from '@/components/top-bar'

const Friends = () => {

    return (
    <>
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
    <StatusBar style='dark' />
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView>
            <TopBar title="Friends"></TopBar>
            <FriendCard name={'alo'} imageUrl={'alo'} lastMessage={'ê thằng ku'} lastMessageDate={new Date()}></FriendCard>
            <FriendCard name={'alo'} imageUrl={'alo'} lastMessage={'ê thằng ku'} lastMessageDate={new Date()}></FriendCard>
            <FriendCard name={'alo'} imageUrl={'alo'} lastMessage={'ê thằng ku'} lastMessageDate={new Date()}></FriendCard>
            <FriendCard name={'alo'} imageUrl={'alo'} lastMessage={'ê thằng ku'} lastMessageDate={new Date()}></FriendCard>
        </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
    </SafeAreaProvider>
    </>
    )
}

export default Friends