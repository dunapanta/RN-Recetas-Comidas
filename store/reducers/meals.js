import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals'

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
        case SET_FILTERS:
            const appliedFilters = actions.filters
            const updatedFilteredMeals = state.meals.filter(meal => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree){
                    //se debe borrar porque tiene filtro y la comida no lo cumple
                    return false
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian){
                    return false
                }
                if(appliedFilters.vegan && !meal.isVegan){
                    return false
                }
                return true
            }) //filter retorna un nuevo array en donde se queda con los que devuelve true y elimina los false
            return {
                ...state,
                filteredMeals: updatedFilteredMeals
            }
        default:
            return state;

    }
}

export default mealsReducer