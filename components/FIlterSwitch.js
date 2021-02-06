import React from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'

import Colors from '../constants/Colors'

const FilterSwich = ({ text, value, onSelect }) => {

    return (
        <View style={styles.filterContainer}>
            <Text style={styles.text}>{text}</Text>
            <Switch 
                /* trackColor={{ true: Colors.primaryColor }}
                thumbColor={Colors.secondaryColor} */
                value={value} 
                onValueChange={onSelect}/>
        </View>
    )
}

const styles = StyleSheet.create({
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
    text:{
        fontFamily: 'open-sans',
        fontSize: 16
    }
})

export default FilterSwich