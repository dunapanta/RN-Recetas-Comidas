import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

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
        headerTintColor: 'white'
    }
})




export default createAppContainer(MealsNavigator)
