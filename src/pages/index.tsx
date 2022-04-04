import Imsyak from '@/components/templates/Imsyak'

import { getRegencies } from '@/services/api'
import { Regency } from '@/services/api/api.type'

import { Suspense, lazy, useEffect, useState } from 'react'

const Select = lazy(() => import('@/components/mollecules/Select'))

const IndexPage = (): JSX.Element => {
  const [data, setData] = useState<Regency[]>([])

  const populateList = async () => {
    const res = await getRegencies()
    const regencies: Regency[] = res.data.map((reg) => {
      const name = reg.name.startsWith('KABUPATEN') ? 'KAB. ' + reg.name.slice(10) : reg.name
      return {
        ...reg,
        name
      }
    })
    setData(regencies)
  }
  useEffect(() => {
    populateList()
  }, [])

  return (
    <>
      <div className='pb-10 flex items-center justify-end'>
        {data.length > 0 && (
          <Suspense fallback={<div> Loading....</div>}>
            <Select regency={data} />
          </Suspense>
        )}
      </div>

      <Imsyak />
    </>
  )
}

export default IndexPage
