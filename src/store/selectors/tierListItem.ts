import { createSelector } from "@reduxjs/toolkit"

import type { TierListItem } from "../../typings"
import type { AppSelector } from "./typings"

export const selectTierListItemsMapping: AppSelector<Record<string, TierListItem>> = (state) => {
	return state.tierListItemReducer.instances
}

export const selectTierListItems: AppSelector<TierListItem[]> = createSelector(
	[selectTierListItemsMapping],
	(mapping) => {
		return Object.values(mapping)
	},
)
