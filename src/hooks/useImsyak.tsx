import { getImsyak } from '@/services/api'
import * as atom from '@/stores'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

const useImsyak = () => {
  const [data, setData] = useAtom(atom.imsyakList)
  const [city] = useAtom(atom.city)

  const populate = async () => {
    setData((prevState) => ({ ...prevState, isLoading: true }))
    const res = await getImsyak(city)
    if (res.isError) {
      setData((prevState) => ({ ...prevState, isLoading: false, isError: true }))
      return
    }
    setData((prevState) => ({ ...prevState, isLoading: false, isError: false, data: res.data }))
  }

  useEffect(() => {
    populate()
  }, [city])

  return data
}

export default useImsyak
