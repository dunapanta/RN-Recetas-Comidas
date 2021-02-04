import React from 'react'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import MealList from '../components/MealList'

const CategoryMealScreen = ({ navigation }) => {

    const catId = navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    

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


export default CategoryMealScreen