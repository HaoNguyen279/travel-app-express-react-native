import UserAvatar from "@/components/user-avatar";
import TopBar from "@/components/top-bar";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from "react";
export default function Profile() {
  return (
    <>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
        <StatusBar style="dark" />
        <KeyboardAvoidingView
          style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView>
              <TopBar title="Profile"></TopBar>
              <UserAvatar/>
              <Text style={styles.name}>Mark Zuckerberg</Text>
              <Text style={styles.career}>Software Engineer</Text>
              <Text style={styles.location}>
                <MaterialCommunityIcons name="gender-female" size={18} color="black" />
                Male • 
                <Ionicons name="location-outline" size={18} color="black" />
                Ho Chi Minh City</Text>
                  <Text style={styles.quote}>
                  "People don't care what you say,
                  they care about what you build."
                  </Text>
                  <Text style={styles.sectionTitle}>Personal Information</Text>
                  <View style={{marginHorizontal: 35, marginVertical : 10, flexDirection:'row', justifyContent:'space-around', alignItems:'center', gap:20}}>
                    <Component title="Software Engineer" subTitle="Facebook" icon={<MaterialIcons name="work" size={18} color="rgb(76, 56, 255)" style={{marginLeft:5, marginBottom: 3}} />} />
                    <Component title="Birthday" subTitle="27/09/2005" icon={<FontAwesome name="birthday-cake" size={18} color="#F97316" style={{marginLeft:5, marginBottom: 3}} />} />
                  </View>

                  <View>
                    <Text style={styles.sectionTitle}>
                    About me
                  </Text>
                  <Text style={styles.aboutText}>
                  Hi, I'm Mark, a software engineer with a passion for creating innovative solutions. 
                  With 5 years of experience in full-stack development, I specialize in building scalable web applications.
                  In my free time, I enjoy hiking, photography, and exploring new technologies.
                  </Text>
                  </View>


          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
    </>
  )
}

interface ComponentProps {
  title? : String,  
  subTitle? : String,
  icon : React.ReactNode,
}
const Component = (props: ComponentProps) => {
  return (
    <View style={componentStyle.container}>
      {props.icon}
      <Text style={{marginLeft:5, color:"rgb(136, 136, 136)"}}>{props.title}</Text>
      <Text style={{marginLeft:5, fontWeight :"500"}}>{props.subTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  name :{
    fontWeight : 600,
    fontSize : 22,
    textAlign : 'center',
  },
  career:{
    fontWeight : 500,
    fontSize : 16,
    textAlign : 'center',
    color : '#4F46E5',
  },
  location:{
    fontWeight : 400,
    fontSize : 14,
    textAlign : 'center',
    color : 'gray',
    padding : 10
  },
  quote:{
    fontStyle : 'italic',
    fontWeight : 300,
    justifyContent : 'center',
    textAlign : 'center',
    alignSelf : 'center',
    maxWidth : '70%',
    marginTop : 10,
  },
  sectionTitle:{
    fontWeight : 500,
    fontSize : 16,
    textAlign : 'left',
    paddingLeft : 40,
    marginTop : 10
  },
  aboutText:{
    textAlign:'left', paddingLeft:40, paddingRight:40, marginTop:5, lineHeight:20, color:'rgb(64, 64, 64)'
  },
})

const componentStyle = StyleSheet.create({
  container:{
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'flex-start',
    borderColor : 'rgb(223, 223, 223)',
    borderWidth : 2,
    borderRadius : 10,
    padding : 10,
    width : '40%',
  }
})