import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { settingsReducer, tierListItemReducer, tierReducer } from "./slices"

export const store = configureStore({
	reducer: combineReducers({
		tierReducer,
		tierListItemReducer,
		settingsReducer,
	}),
})
