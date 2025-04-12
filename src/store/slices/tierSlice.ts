import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { Tier } from "../../typings"

interface TierSliceState {
	instances: Record<string, Tier>
}

const initialState: TierSliceState = {
	instances: {},
}

export const tierSlice = createSlice({
	name: "tier",
	initialState,
	reducers: {
		addTier: (state, action: PayloadAction<Tier>) => {
			state.instances[action.payload.uuid] = action.payload
		},
		removeTier: (state, action: PayloadAction<string>) => {
			delete state.instances[action.payload]
		},
	},
})

export const { addTier, removeTier } = tierSlice.actions

export const tierReducer = tierSlice.reducer
