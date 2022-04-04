export type CityName = string
export type ThemeAtom = 'light' | 'dark'

export interface Imsyak {
  ashar: string
  date: string
  dhuha: string
  dzuhur: string
  imsak: string
  isya: string
  maghrib: string
  subuh: string
  syuruk: string
}

export type ImsyakResponse = {
  status: boolean
  message: string
  data: Array<Imsyak>
}

export interface ImsyakList {
  isLoading: boolean
  isError: boolean
  data: Array<Imsyak>
}
