import Select from '@/components/mollecules/Select'
import Imsyak from '@/components/templates/Imsyak'

const IndexPage = (): JSX.Element => {
  return (
    <>
      <div className='pb-10 flex items-center justify-end'>
        <Select />
      </div>

      <Imsyak />
    </>
  )
}

export default IndexPage
