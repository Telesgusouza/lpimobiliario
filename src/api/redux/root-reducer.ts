import { combineReducers } from 'redux';

import useLocationComponents from './locationComponents/reducer'

const rootReducer = combineReducers({ useLocationComponents })

export default rootReducer;