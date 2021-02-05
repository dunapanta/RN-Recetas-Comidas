import React from 'react'
import { Platform, Text } from 'react-native'
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
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
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
        headerTintColor: 'white',
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        }
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
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Categorías</Text>: 'Comidas'
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
            tabBarColor: Colors.secondaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favoritos</Text>: 'Favoritos'
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
            labelStyle:{
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.secondaryColor
        }
})

//pongo de esta manera para poder agregar el header
const FilterNavigator = createStackNavigator({
    Filters: FilterScreen
},  {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        /* headerBackTitleStyle: {
            fontFamily: 'open-sans'
        } */
        
    },
    navigationOptions:{
        drawerLabel: 'Configurar Filtros'
    }
})

const MainNavigator = createDrawerNavigator({
    Tabs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Comidas'
        }
    },
    Filters: FilterNavigator

},{
    contentOptions: {
        activeTintColor: Colors.secondaryColor,  
        activeBackgroundColor : Colors.primaryColor,
        labelStyle: {
            fontFamily: 'open-sans-bold',
            fontSize: 20
        }
    },
    drawerBackgroundColor: Colors.ligtherColor

})

export default createAppContainer(MainNavigator)
