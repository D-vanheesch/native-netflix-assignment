import React from "react";
import {Button} from "react-native";
import {ImageBackground, View, Text, StyleSheet, Image} from "react-native";
import HomeIndex from "./HomeIndex";



export default function StartPage ( {navigation} ) {

    const image = {uri: "https://cdn.mos.cms.futurecdn.net/98GnqFKaUMYU3GG5HxhLWZ.jpg"};


    return (
        <View style={styles.container}>
            <Button style={styles.button} onPress={() => navigation.navigate('HomeIndex')} title={"Home"}>Home</Button>

            <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
            </ImageBackground>

            <Text style={styles.title}>
                Welcome!
            </Text>

            <Text style={styles.text}>You can go to the home page to check out movies and their ratings.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
        title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 50,
        color: 'red',
        position: 'absolute',
            backgroundColor: 'black',
            top: 80,
    },
    text: {
        flex: 3,
        color: 'red',
        position: 'absolute',
        backgroundColor: 'black',
        top: 250,
        fontSize: 30,
    },
    button: {

    }
})
