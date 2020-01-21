import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Settings() {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}> Settings </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87CEEB'
    }
})

export default Settings