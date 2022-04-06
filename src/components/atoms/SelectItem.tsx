import { Regency } from '@/services/api/api.type'
import * as atom from '@/stores'

import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import { useAtom } from 'jotai'

interface SelectItemProps {
  name: Regency['name']
  onClick: () => void
}

const SelectItem: React.FunctionComponent<SelectItemProps> = ({ name, onClick }) => {
  const [city] = useAtom(atom.city)

  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={onClick}
          className={clsx(
            'relative group flex',
            'rounded-md items-center w-full px-2 py-2 text-sm',
            active
              ? 'bg-primary-1/50 dark:bg-theme-3/75 text-theme-3 dark:text-theme-2'
              : 'text-theme-3 dark:text-theme-2'
          )}
        >
          <span>{name}</span>

          {name === city && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 absolute right-1 origin-top-right'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
            </svg>
          )}
        </button>
      )}
    </Menu.Item>
  )
}

export default SelectItem
