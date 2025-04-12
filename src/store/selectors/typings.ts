import type { RootState } from "../typings"

export type AppSelector<TReturn> = (state: RootState) => TReturn
