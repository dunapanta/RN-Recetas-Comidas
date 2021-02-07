import React, { useEffect, useCallback} from 'react'
import { ScrollView, View, Image, Text, StyleSheet, Button} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import DetailItem from '../components/DeatilItem'
import { toggleFavorite } from '../store/actions/meals'

const MealDetailScreen = ({ navigation }) => {

    const mealId = navigation.getParam('mealId')

    const availableMeals = useSelector(state => state.meals.meals)
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

    // For Dispatch action
    const dispatch = useDispatch()

    // usando useCallback la funcion no se recrea y no genera un loop infinito (en este caso solo se recrearia si hay un nuevo meatId)
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect( () => {
        navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler])

    // Para pasar el titulo a navigationOptions
    /* useEffect( () => {
        navigation.setParams({ mealTitle: selectedMeal.title})
    },[selectedMeal]) */

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Lista de Ingredientes</Text>
            {selectedMeal.ingredients.map( ingredient => (
                <DetailItem key={ingredient}>{ingredient}</DetailItem>
            ))}

            <Text style={styles.title}>Instrucciones paso a paso</Text>
            {selectedMeal.steps.map( step => (
                <DetailItem key={step}>{step}</DetailItem>
            ))}

            {/* <View style={styles.screen}>
                <Text>{selectedMeal.title}</Text>
                <Button title="Volver Categorias" onPress={
                    () => {navigation.popToTop()
                }} />
            </View> */}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    /* const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId) */
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    //For dispatch
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')

    return{
        headerTitle: mealTitle,
        headerRight: () => (
        <           HeaderButtons HeaderButtonComponent={HeaderButton}> 
                        <Item 
                            title='Favorito' 
                            iconName='ios-star' 
                            onPress={toggleFavorite} 
                        /> 
                    </HeaderButtons>
                )
    }
}

const styles = StyleSheet.create({
image:{
    width: '100%',
    height: 200
},
details:{
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
    backgroundColor: '#e6ee9c',
    marginBottom: 10
},
title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
}
})

export default MealDetailScreen