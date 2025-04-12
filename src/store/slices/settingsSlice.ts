import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SettingsSliceState {
	theme: "light" | "dark"
}

const initialState: SettingsSliceState = {
	theme: "light",
}

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		setTheme(state, action: PayloadAction<"light" | "dark">) {
			state.theme = action.payload
		},
	},
})

export const { setTheme } = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer
