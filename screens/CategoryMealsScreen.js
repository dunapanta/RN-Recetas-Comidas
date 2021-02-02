import React from 'react'
import { View,  Text, StyleSheet, Button } from 'react-native' 

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealScreen = ({ navigation }) => {

    const catId = navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return (
        <View style={styles.screen}>
            <Text> Category Meal Screen </Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Ver Receta" onPress={ () => {
                navigation.navigate({ routeName: 'MealDetail'})
            }}/>
            <Button title="Atras" onPress={ () => {
                navigation.pop()
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}
})

export default CategoryMealScreen