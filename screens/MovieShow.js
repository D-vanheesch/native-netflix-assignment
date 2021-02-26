import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Image} from "react-native";



export default function MovieShow ( props ) {

    let image = {uri:props.route.params.item.poster}

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.route.params.item.title}</Text>
            <Text style={styles.synopsis}>{props.route.params.item.synopsis}</Text>
                <Image style={styles.image} source={image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {

    },
    synopsis: {
        padding: 16,

    },
    image: {
        width: 150,
        height: 150
    }
})
