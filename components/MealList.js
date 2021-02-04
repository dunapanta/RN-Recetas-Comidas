import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import MealItem from './MealItem'

const MealList = ({ listData, color, navigation }) => {

    const renderMealItem = itemData => {
        return(
            <MealItem 
                title={itemData.item.title} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                color={color}
                onSelectMeal={() => {
                    navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }
                    })
                }}
            />
        )
    }

    return(
        <View style={styles.list}>
            <FlatList 
                /* keyExtractor={(item, index) => item.id} */
                data={listData}
                renderItem={renderMealItem}
                style={{ width: '100%'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    }
})

export default MealList