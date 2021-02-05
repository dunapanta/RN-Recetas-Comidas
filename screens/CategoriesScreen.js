import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import HeaderButton from '../components/HeaderButton'

const CategoriesScreen = ({ navigation }) => {

    const renderGridItem = (itemData) => {
        return(
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect=   {() => {
                navigation.navigate({ routeName: 'CategoryMeals', params: {
                    categoryId: itemData.item.id
                } })
                }}
            />
        )
    }

    return (
        <FlatList 
            /* keyExtractor={(item, index) => item.id} */
            data={CATEGORIES} 
            renderItem={renderGridItem}
            numColumns={2} 
        />
    )
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Categorías de Comida',
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
/* LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(...) 
console.disableYellowBox = true;*/
console.disableYellowBox = true;

const styles = StyleSheet.create({
screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
})

export default CategoriesScreen