import { useLayoutEffect } from "react"

import { useAppSelector } from "./store"

export const useTheme = () => {
	const theme = useAppSelector((state) => state.settingsReducer.theme)

	useLayoutEffect(() => {
		if (theme !== "light") {
			document.body.classList.add("dark")
			document.body.classList.remove("light")
		} else {
			document.body.classList.add("light")
			document.body.classList.remove("dark")
		}
	}, [theme])

	return theme
}
