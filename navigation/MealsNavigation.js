import { createStackNaigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

// configure the screens que want to move between with key value pairs
const MealsNavigator = createStackNaigator({
    Categories: CategoriesScreen,
    CategorieMeals: {
        screen: CategoryMealsScreen
    } ,
    MealDetail: MealDetailScreen
})


export default createAppContainer(MealsNavigator)
