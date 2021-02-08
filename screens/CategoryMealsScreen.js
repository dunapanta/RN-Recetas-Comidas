import React from 'react'
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList'
import { View, Text, StyleSheet } from 'react-native'

const CategoryMealScreen = ({ navigation }) => {

    const catId = navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    // needs a function as argument
    const availableMeals = useSelector( state => state.meals.filteredMeals )

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    if(displayedMeals.length === 0){
        return (
            <View style={styles.content}>
                <Text style={styles.text}>Aún no se han agregado recetas</Text>
            </View>
        )
    }

    return (
        <MealList 
            listData={displayedMeals} 
            navigation={navigation} 
            color={selectedCategory.color}
        />
    )
}

CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'open-sans',
        fontSize: 16
    }
})


export default CategoryMealScreen