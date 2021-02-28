import { Text, View, FlatList, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieShow from "./MovieShow";

export default function HomeIndex({ navigation }) {

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState();



    const options = {
        method: 'GET',
        url: 'https://unogsng.p.rapidapi.com/search',
        params: {
            query: searchQuery,
            orderby: 'date',
            limit: '100',
            type: 'movie',
            start_year: '1992',
            end_year: '2019',
        },
        headers: {
            'x-rapidapi-key': 'adc43e01efmsh4e33b30d1f57ef9p1c5965jsn4a48b5e075ce',
            'x-rapidapi-host': 'unogsng.p.rapidapi.com'
        }
    };

    useEffect(() => {
        async function getMovies() {
            try {
                const response = await axios(options)

                setMovies(response.data.results);

                console.log ('DATA:', movies);

            } catch (e) {
                console.log (e);
            }
        }
        getMovies();

    }, [searchQuery])

    function goToMovie(item) {
        navigation.navigate("MovieShow", {item: item})
    }


    return <View>
        <TextInput
            onChangeText={setSearchQuery}
            type="text"
            placeholder="Search.."
            style={{ backgroundColor: 'white', paddingHorizontal: 180, paddingTop: 20, paddingBottom: 20, }}
        />

        <FlatList
            data={movies}
            renderItem={({ item }) => {
                return <View style={styles.container}>
                    <Pressable style={styles.listItem} onPress={() => goToMovie(item)} >
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.imdbrating}>*Imdb: {item.imdbrating}</Text>
                </Pressable>
                </View>
            }}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => {
                return <View style={styles.itemSeparator} />
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    itemSeparator: {
        borderBottomColor: 'red',
        borderWidth: 4,
        justifyContent: 'center',
    },
    listItem: {
        alignItems: 'center',

    },
    container: {
        color: 'red',
        textAlign: 'center',
        paddingTop: 40,
        paddingBottom: 80,
    },
    title: {
        color: 'red',
        fontSize: 25,
        borderColor: 'red',
    },
    imdbrating: {
        color: 'black',
        fontSize: 20,
        width: 100,
    },
});
