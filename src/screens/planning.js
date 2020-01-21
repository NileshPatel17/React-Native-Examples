import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Planning() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}> Planning </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F08080'
    }
})

export default Planning