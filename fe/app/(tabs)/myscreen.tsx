import { Link } from "expo-router";
import { StyleSheet, Text, View, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import  PlaceCard  from "@/components/place-card";
import { getAllPlaces } from "@/services/place.service";
import { usePlace } from "@/hooks/usePlace"

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
                        <Text>Test</Text>
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

