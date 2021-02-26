import {Button, Text, View} from "react-native";
import React from "react";
import styles from "./styles";
import {StatusBar} from "expo-status-bar"; //Switch

export default function HomeScreen( ) {
    return <View style={styles.container}>
        <Text>NETFLIX</Text>
        <StatusBar style="auto" />
    </View>
}
