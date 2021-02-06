import React,{ useState } from 'react'
import { View,  Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'
import FilterSwich from '../components/FIlterSwitch'

const FilterScreen = () => {

    const [isGlutenFree, setisGlutenFree] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isLactose, setIsLactose] = useState(false)

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