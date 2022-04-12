import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// take 'reducers' function, and give back whatever type it returns
// in this case {
//  repositories: RepositoriesState -> repositoriesReducer is a func that returns RepositoriesState type
// }
export type RootState = ReturnType<typeof reducers>;
