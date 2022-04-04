import { config } from '@/services/config'
import { Imsyak, ImsyakResponse } from '@/stores/stores.type'

import { GetImsyak, GetRegencies, Regency, State, StateResponse } from './api.type'

import Axios from 'axios'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const imsyak = Axios.create({
  baseURL: config.imsyakAPI,
  headers
})

export const regency = Axios.create({
  baseURL: config.locationAPI,
  headers
})

export const getImsyak = async (payload: State['name']): Promise<GetImsyak<Imsyak>> => {
  try {
    const city = await imsyak.get<StateResponse>(`city?state=${config.bantenID}&search=${payload}`)
    if (city.status !== 200) {
      return {
        isError: true,
        data: []
      }
    }

    const res = await imsyak.get<ImsyakResponse>(
      `imsyakiyah?state=${config.bantenID}&city=${city.data.data[0].id}&year=2022`
    )
    if (res.status !== 200) {
      return {
        isError: true,
        data: []
      }
    }

    return {
      isError: false,
      data: res.data.data
    }
  } catch (err) {
    return {
      isError: true,
      data: []
    }
  }
}

export const getRegencies = async (): Promise<GetRegencies> => {
  try {
    const res = await regency.get<Array<Regency>>('/regencies/36.json')
    if (res.status !== 200) {
      return {
        data: [],
        isError: true
      }
    }

    return {
      data: res.data,
      isError: true
    }
  } catch (err) {
    return {
      isError: true,
      data: []
    }
  }
}
