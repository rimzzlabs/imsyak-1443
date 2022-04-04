import { Imsyak } from '@/stores/stores.type'

interface TableRowProps {
  data: Imsyak
  index: number
}

export const TableRow: React.FunctionComponent<TableRowProps> = ({ data, index }) => {
  return (
    <tr className='even:bg-theme-2/30 dark:even:bg-theme-3/30'>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{index + 1}</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.date} WIB</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.imsak} WIB</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.subuh} WIB</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.dhuha} WIB</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.dzuhur} WIB</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.ashar} WIB</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.maghrib} WIB</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.isya} WIB</td>
    </tr>
  )
}
