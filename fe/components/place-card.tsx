import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import {Place} from '../types/place'
export default function PlaceCard({data} : {data : Place}) {
    return (
        <View style={styles.card}>
            <View>
                <Image source={{uri: data.image_url || undefined}} style={styles.card_image}/>
                <Pressable style={styles.card_image_button}>
                    <Ionicons name="heart" size={20} color={"#E2E2E2"} />
                </Pressable>
            </View>
            <View style={styles.card_body}>
                <Text style={styles.card_body_header}>{data.name}</Text>
                <Text style={styles.card_body_light}>
                    <Ionicons name="location" size={12} color={"#ff5724ff"}/>
                    Location : {data.country}</Text>
                <Text style={styles.card_body_light}>
                    <Ionicons name="star" size={12} color={"#FFC107"}/>
                    Ratings : {data.average_rating}/5
                </Text>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    card_image:{
        width: '100%',
        aspectRatio: 16 / 9,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    card_body_header:{
        fontSize: 18,
        fontWeight:600,
    },
    card_body_light:{
        fontSize: 12,
        fontWeight:300,
    },
    card:{
        flex:1,
        backgroundColor: "white",
        borderRadius: 16,
        borderColor: "#f9f9f9ff",
        borderWidth:1,
        elevation:4
    },
    card_body:{
        padding:10
    },
    card_image_wrapper:{
        position:"relative"
    },
    card_image_button:{
        flex:1,
        position: "absolute",
        top: "5%",
        right:"5%",
        width:30,
        height:30,
        borderRadius:"50%",
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
    }
})

