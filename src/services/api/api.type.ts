import { Imsyak } from '@/stores/stores.type'

interface Template {
  status: boolean
  message: string
}
export interface State {
  id: string
  name: string
}

export interface StateResponse extends Template {
  data: Array<State>
}

export interface GetImsyak<T = Imsyak> {
  isError: boolean
  data: Array<T>
}

export interface ImsyakResponse extends Template {
  data: Array<Imsyak>
}

export interface Regency {
  id: string
  province_id: string
  name: string
}

export interface GetRegencies {
  data: Array<Regency>
  isError: boolean
}
