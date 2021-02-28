import React  from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function MovieShow ( props ) {

    let image = {uri:props.route.params.item.poster}

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.title}>{props.route.params.item.title}</Text>
            <Text style={styles.synopsis}>{props.route.params.item.synopsis}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    image: {
        flex: 3,
        width: 220,
        height: 100,
    },
    title: {
        flex: 2,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
        borderRadius: 2,
        paddingTop: 50,
        paddingBottom: 5,

    },
    synopsis: {
        flex: 2,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        paddingTop: 50,
        fontSize: 20,
        color: 'red',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 5,
    },

});
