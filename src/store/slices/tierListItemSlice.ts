import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { TierListItem } from "../../typings"

interface TierListItemSliceState {
	instances: Record<string, TierListItem>
}

const initialState: TierListItemSliceState = {
	instances: {},
}

export const tierListItemSlice = createSlice({
	name: "tierListItem",
	initialState,
	reducers: {
		addTierListItem: (state, action: PayloadAction<TierListItem>) => {
			state.instances[action.payload.uuid] = action.payload
		},
		removeTierListItem: (state, action: PayloadAction<string>) => {
			delete state.instances[action.payload]
		},
	},
})

export const { addTierListItem, removeTierListItem } = tierListItemSlice.actions

export const tierListItemReducer = tierListItemSlice.reducer
