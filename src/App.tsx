import { Moon, Sun } from "lucide-react"
import { memo, useCallback } from "react"

import { useTheme } from "./hooks"
import { useAppDispatch, useAppSelector } from "./store"
import { selectTiers } from "./store/selectors"
import { setTheme } from "./store/slices"

export const App = memo(() => {
	const tiers = useAppSelector(selectTiers)
	const dispatch = useAppDispatch()

	const theme = useTheme()

	console.debug(tiers)

	const handleThemeChange = useCallback(() => {
		dispatch(setTheme(theme === "light" ? "dark" : "light"))
	}, [dispatch, theme])

	return (
		<div className="flex size-full flex-col p-4">
			<div className="flex h-max w-full items-center justify-between">
				<h1 className="text-xl">Tier maker</h1>
				<button onClick={handleThemeChange}>{theme === "light" ? <Sun /> : <Moon />}</button>
			</div>
		</div>
	)
})
