import React from 'react'
import { View,  Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import Colors from '../constants/Colors'
import HeaderButton from '../components/HeaderButton'

const FavoriteScreen = ({ navigation }) => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)

   /*  const favMeals = availableMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2') */

   if (favMeals.length === 0 || !favMeals){
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Aún no has añadido tus comidas favoritas</Text>
        </View>
    )
   }

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

export default FavoriteScreen