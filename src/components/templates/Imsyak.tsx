import TableImsyak from '@/components/organism/TableImsyak'

import { getImsyak } from '@/services/api'
import * as atom from '@/stores'

import { Spinner } from '../atoms/Spinner'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

const Imsyak = () => {
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

  if (data.isLoading && !data.isError) {
    return (
      <div className='w-full min-h-[70vh] flex flex-col items-center justify-center'>
        <Spinner />
        <p className='mt-4'>Loading...</p>
      </div>
    )
  }

  if (data.isError && !data.isLoading) {
    return (
      <div className='w-full py-10 text-center'>
        <h3>Terjadi kesalahan, mohon ulangi kembali 😐</h3>
      </div>
    )
  }

  return (
    <div className='w-full overflow-x-auto pb-20'>
      <TableImsyak data={data.data} />
    </div>
  )
}

export default Imsyak
