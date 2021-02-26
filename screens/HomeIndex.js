import { Text, View, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieShow from "./MovieShow";

export default function HomeIndex({navigation}) {

    const [movies, setMovies] = useState([]);

    // // const [search, setSearch] = useState('');

    // // const [countries, setCountries] = useState();

    const options = {
        method: 'GET',
        url: 'https://unogsng.p.rapidapi.com/search',
        params: {
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

    }, [])

    function goToMovie(item) {
        navigation.navigate("MovieShow", {item: item})
    }


    return <View>
        <Text>NETFLIX</Text>

        <FlatList
            data={movies}
            renderItem={({ item }) => {
                return <Pressable style={styles.listItem} onPress={() => goToMovie(item)} >
                    <Text>
                    {item.title}
                    ({item.imdbrating})
                </Text>
                </Pressable>
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
        borderBottomColor: 'black',
        borderWidth: 2,
        justifyContent: 'center'
    },
    listItem: {
        color: 'black',

    }
})
