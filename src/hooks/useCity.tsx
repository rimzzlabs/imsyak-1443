import * as atom from '@/stores'

import { useAtom } from 'jotai'

const useCity = () => {
  const [city, setCity] = useAtom(atom.city)

  const changeCity = (payload: string) => setCity(payload)

  return {
    city,
    changeCity
  }
}

export default useCity
