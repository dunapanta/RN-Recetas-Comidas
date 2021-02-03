import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const CategoryGridTile = ({ title, onSelect }) => {

    return(
        <TouchableOpacity 
            style={styles.gridItem}
            onPress={onSelect}>
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoryGridTile