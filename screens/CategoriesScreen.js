import React from 'react'
import { View,  Text,  Button, StyleSheet } from 'react-native'

const CategoriesScreen = ({ navigation }) => {

    return (
        <View style={styles.screen}>
            <Text> Categorías </Text>
            <Button title="Ir a Comidas!" onPress={() =>{
                navigation.navigate({ routeName: 'CategoryMeals' })
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}
})

export default CategoriesScreen