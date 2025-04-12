import { createSelector } from "@reduxjs/toolkit"

import type { Tier } from "../../typings"
import type { AppSelector } from "./typings"

export const selectTiersMapping: AppSelector<Record<string, Tier>> = (state) => {
	return state.tierReducer.instances
}

export const selectTiers: AppSelector<Tier[]> = createSelector([selectTiersMapping], (mapping) => {
	return Object.values(mapping)
})
