import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

import Colors from '../constants/Colors'

// configure the screens que want to move between with key value pairs
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
}, {
    // initialRouteName: 'Categories'
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTintColor: 'white'
    }
})

const MealsFavTabNavigator =  createBottomTabNavigator({
    Meals: { screen: MealsNavigator, navigationOptions: {
        tabBarLabel: 'Categorías',
        tabBarIcon: (tabInfo) => {
            return (
                <Ionicons 
                    name='ios-restaurant' 
                    size={25}
                    color={tabInfo.tintColor} />
                )
        }
    }},
    Favorites: {screen: FavoritesScreen, navigationOptions:{
        tabBarLabel: 'Favoritos',
        tabBarIcon: (tabInfo) => {
            return (
                <Ionicons 
                    name='ios-star' 
                    size={25}
                    color={tabInfo.tintColor} />
                )
        }
    }}
}, {
    tabBarOptions: {
        activeTintColor: Colors.secondaryColor
    }
})

export default createAppContainer(MealsFavTabNavigator)
