import React from 'react'
import { View,  Text, StyleSheet, FlatList,Button } from 'react-native' 

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealScreen = ({ navigation }) => {

    const catId = navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    const renderMealItem = itemData => {
        return(
            <MealItem 
                title={itemData.item.title} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                color={selectedCategory.color}
                onSelectMeal={() => {}}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList 
                /* keyExtractor={(item, index) => item.id} */
                data={displayedMeals}
                renderItem={renderMealItem}
                style={{ width: '100%'}}
            />
        </View>
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
screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
}
})

export default CategoryMealScreen