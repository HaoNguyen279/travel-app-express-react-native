import { Link } from "expo-router";
import { StyleSheet, Text, View, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import  PlaceCard  from "@/components/place-card";
import { getAllPlaces } from "@/services/place.service";
import { usePlace } from "@/hooks/userPlace";
async function fetchtest() {
    // const url = "http://192.168.1.64:3000/api/users/getAllUsers"
    // try {
    //     const response = await fetch(url);
    //     if(!response.ok){
    //         throw new Error(`Response status: ${response.status}`);
    //     }
    //     const result = await response.json();
    //     console.log(result);
    // } catch (error: any) {
    //     console.log(error.message);
    // }
    const res = await getAllPlaces();

    console.log(res.data);
}

export default function MyScreen() {
    const {place, loading} = usePlace();
    return (
        <SafeAreaView style={{backgroundColor:"#ffffff",flex:1}}>
            <View>
                <Text>This is just a text</Text>
            </View>
            <View>
                <Link href={"/"} asChild replace>
                    <Button mode="contained">
                        <Text></Text>
                    </Button>
                </Link>
            </View>
            <View>
                <FlatList
                    data={place}
                    numColumns={2}
                    keyExtractor={(item) => item.place_id.toString()}
                    renderItem={({item}) => (
                        <PlaceCard data={item}/>
                    )}
                    columnWrapperStyle={styles.row}

                />

            </View>

            <Button mode="contained" onPress={()=>{
                console.log(place);
            }}>
                <Text>Another Button</Text>
            </Button>
        </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    row:{
        flexDirection: 'row',
        gap :12,
        padding:16
    }
})

