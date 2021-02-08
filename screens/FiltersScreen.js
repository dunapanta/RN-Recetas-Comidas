import React,{ useState, useEffect, useCallback } from 'react'
import { View,  Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import FilterSwich from '../components/FIlterSwitch'
import { setFilters } from '../store/actions/meals'

const FilterScreen = ({ navigation }) => {

    const [isGlutenFree, setisGlutenFree] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isLactose, setIsLactose] = useState(false)

    const dispatch = useDispatch()

    // function will be cached by react and is only recreted if its dependencies changed
    const saveFilters = useCallback( () => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            vegetarian: isVegetarian,
            vegan: isVegan,
            lactoseFree: isLactose
        }

        console.log(appliedFilters)
        dispatch(setFilters(appliedFilters))
        navigation.navigate('Categories');
        
    }, [isGlutenFree, isVegetarian, isVegan, isLactose, dispatch])

    useEffect( () => {
        // update the params values for the currently loaded screen
        navigation.setParams({
            save: saveFilters
        })
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Aplicar Filtros de Comida </Text>
            <FilterSwich 
                text="Libre de Gluten" 
                value={isGlutenFree} 
                onSelect={selected => setisGlutenFree(selected)}/>
            <FilterSwich 
                text="Vegetariana" 
                value={isVegetarian} 
                onSelect={selected => setIsVegetarian(selected) }/>
            <FilterSwich 
                text="Vegana" 
                value={isVegan} 
                onSelect={selected => setIsVegan(selected)}/>
            <FilterSwich 
                text="Sin Lactosa" 
                value={isLactose} 
                onSelect={selected => setIsLactose(selected)}/>
        </View>
    )
}

FilterScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filtros',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Menú" 
                    iconName='ios-menu' 
                    onPress={() => {
                    navData.navigation.toggleDrawer()
                    }} />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Guardar" 
                    iconName='save' 
                    onPress={() => {
                        navData.navigation.getParam('save')()
                    }} />
            </HeaderButtons>
        )

    }
}

const styles = StyleSheet.create({
screen:{
    flex: 1,
    alignItems: 'center'
},
title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
},
})

export default FilterScreen