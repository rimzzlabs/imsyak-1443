import { getRegencies } from '@/services/api'
import { Regency } from '@/services/api/api.type'
import * as atom from '@/stores'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

const useRegency = () => {
  const [regency, setRegency] = useAtom(atom.regency)

  const populate = async () => {
    const res = await getRegencies()
    const regencies: Array<Regency> = res.data.map((reg) => {
      const name = reg.name.startsWith('KABUPATEN') ? 'KAB. ' + reg.name.slice(10) : reg.name
      return {
        ...reg,
        name
      }
    })
    setRegency(regencies)
  }
  useEffect(() => {
    populate()
  }, [])

  return regency
}

export default useRegency
