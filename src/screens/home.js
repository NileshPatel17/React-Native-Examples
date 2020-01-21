import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Home() {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}> Home </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDA89'
    }
})

export default Home