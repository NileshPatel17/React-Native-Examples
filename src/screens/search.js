import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Search() {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}> Search </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDEAD'
    }
})

export default Search