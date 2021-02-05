import React from 'react'
import { View,  Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MeatList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import Colors from '../constants/Colors'
import HeaderButton from '../components/HeaderButton'

const FavoriteScreen = ({ navigation }) => {

    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

    return (
        <MealList 
            listData={favMeals}
            navigation={navigation}
            color={Colors.primaryColor}
        />
    )
}

FavoriteScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Recetas Favoritas',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Menú" 
                    iconName='ios-menu' 
                    onPress={() => {
                    navData.navigation.toggleDrawer()
                    }} />
            </HeaderButtons>
        )

    }
}


export default FavoriteScreen