import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/meals'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex( meal => meal.id === action.mealId) // retorna -1 no esta
            if (existingIndex >= 0 ){
                //si entra aqui hay que quitarlo la comida del array
                const updatedFavMeals = [...state.favoriteMeals] // importante crear copia del array
                updatedFavMeals.splice(existingIndex, 1)
                return {
                    ...state,
                    favoriteMeals: updatedFavMeals
                }
            }else{
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return{
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(meal) //concat añade un elemento y retorna un nuevo array
                }
            }
        default:
            return state;

    }
}

export default mealsReducer