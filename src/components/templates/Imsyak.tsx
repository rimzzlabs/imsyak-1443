import { Spinner } from '@/components/atoms/Spinner'
import TableImsyak from '@/components/organism/TableImsyak'

import useImsyak from '@/hooks/useImsyak'

const Imsyak = () => {
  const data = useImsyak()

  if (data.isLoading && !data.isError) {
    return (
      <div className='w-full min-h-[70vh] flex flex-col items-center justify-center'>
        <Spinner />
        <p className='mt-4'>Loading</p>
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
