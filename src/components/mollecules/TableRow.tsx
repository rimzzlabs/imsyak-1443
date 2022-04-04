import { Imsyak } from '@/stores/stores.type'

interface TableRowProps {
  data: Imsyak
  index: number
}

export const TableRow: React.FunctionComponent<TableRowProps> = ({ data, index }) => {
  return (
    <tr className='even:bg-theme-2/30 dark:even:bg-theme-3/30'>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{index + 1}</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.date}</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.imsak}</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.subuh}</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.dhuha}</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.dzuhur}</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.ashar}</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.maghrib}</td>
      <td className='border border-theme-2 dark:border-theme-3 p-2 md:p-4'>{data.isya}</td>
    </tr>
  )
}
