import { createContext, useReducer } from 'react';

export const WorkoutContext = createContext();

export const workoutReducer = (state, action) => {
switch(action.type){
	case 'SET_WORKOUTS':
		return {
			workouts: action.payload
		}
		case 'CREATE_WORKOUTS':
			return {
				workouts: [action.payload, ...state.workouts]
			}
		default: 
			return state
}
}
export const WorkoutContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(workoutReducer, {
	workouts: null
})

// dispatch({type:'SET_WORKOUTS', payload:[{}, {}]})

	return (
		<WorkoutContext.Provider value={}>
			{children}
		</WorkoutContext.Provider>
	);
};
