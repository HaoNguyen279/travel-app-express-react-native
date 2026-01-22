import { Link } from "expo-router";
import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, ScrollView} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import  PlaceCard  from "@/components/place-card";
import { getAllPlaces } from "@/services/place.service";
import { usePlace } from "@/hooks/usePlace"
import { StatusBar } from "expo-status-bar";
import TopBar from "@/components/top-bar";

export default function Home() {
    const {place, loading} = usePlace();
    return (
    <>
    <SafeAreaProvider>
    <SafeAreaView style={{backgroundColor:"#ffffff",flex:1}}>
    <StatusBar/>
    <KeyboardAvoidingView>
        <TopBar title='Home'/>
        <FlatList
            data={place}
            numColumns={2}
            keyExtractor={(item) => item.place_id.toString()}
            renderItem={({item}) => (
                <PlaceCard data={item}/>
            )}
            columnWrapperStyle={styles.row}
            ListHeaderComponent={() =>{
                return(
                    <View></View>
                )
            }}
            ListFooterComponent={()=>{
                return(
                    <View>
                        <Text style={{textAlign: 'center', padding: 16}}>You reach the end of the list</Text>
                    </View>
                )
            }}
        />
    </KeyboardAvoidingView>
    </SafeAreaView>
    </SafeAreaProvider>
    </>
    )
}

const styles =  StyleSheet.create({
    row:{
        flexDirection: 'row',
        gap :12,
        padding:16
    }
})

