import { Imsyak } from '@/stores/stores.type'

import { TableRow } from '../mollecules/TableRow'

interface TableImsyakProps {
  data: Array<Imsyak>
}

const TableImsyak: React.FunctionComponent<TableImsyakProps> = ({ data }) => {
  const head = ['Hari Ke', 'Tanggal', 'Imsyak', 'Subhuh', 'Dhuha', 'Dzuhur', 'Ashar', 'Maghrib', 'Isya']

  if (data.length === 0) {
    return (
      <div className='w-full py-10 text-center'>
        <h3>Tidak ada data, API mungkin telah dinonaktifkan 😢</h3>
      </div>
    )
  }

  return (
    <table className='table-auto border-collapse border border-theme-2 dark:border-theme-3 w-full'>
      <thead>
        <tr className='bg-primary-1/30 dark:bg-primary-2/30'>
          {head.map((name, id) => (
            <th key={id} className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((prop, id) => (
          <TableRow data={prop} index={id} key={prop.date} />
        ))}
      </tbody>
    </table>
  )
}

export default TableImsyak
