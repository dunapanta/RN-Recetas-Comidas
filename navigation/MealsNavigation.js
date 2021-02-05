import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FilterScreen from '../screens/FiltersScreen'

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

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    // initialRouteName: 'Categories'
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.secondaryColor,
        },
        headerTintColor: 'white'
    }
})

const tabScreenConfig = {
        Meals: { screen: MealsNavigator, navigationOptions: {
            tabBarLabel: 'Categorías',
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-restaurant' 
                        size={25}
                        color={tabInfo.tintColor} />
                    )
            },
            tabBarColor: Colors.primaryColor
        }},
        Favorites: {screen: FavoritesNavigator, navigationOptions:{
            tabBarLabel: 'Favoritos',
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name='ios-star' 
                        size={25}
                        color={tabInfo.tintColor} />
                    )
            },
            tabBarColor: Colors.secondaryColor
        }}
}

const MealsFavTabNavigator = 
    Platform.OS === 'android'  
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor: 'white',
            shifting: true,
            //barStyle: { backgroundColor: Colors.secondaryColor}
        }) 
        :  createBottomTabNavigator( tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.secondaryColor
        }
})

//pongo de esta manera para poder agregar el header
const FilterNavigator = createStackNavigator({
    Filters: FilterScreen
})

const MainNavigator = createDrawerNavigator({
    Tabs: MealsFavTabNavigator,
    Filters: FilterNavigator

})

export default createAppContainer(MainNavigator)
