import type { RootState } from "../typings"
import type { AppSelector } from "./typings"

export const selectTheme: AppSelector<"light" | "dark"> = (state: RootState): "light" | "dark" =>
	state.settingsReducer.theme
