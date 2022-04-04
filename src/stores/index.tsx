import { CityName, ImsyakList, ThemeAtom } from './stores.type'

import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const initialState: CityName = 'KAB. PANDEGLANG'
const imsyakInitialState: ImsyakList = {
  data: [],
  isError: false,
  isLoading: false
}

export const city = atom(initialState)
export const imsyakList = atom(imsyakInitialState)
export const appTheme = atomWithStorage<ThemeAtom>('theme', 'light')
